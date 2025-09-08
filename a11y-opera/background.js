/*
  ╔══════════════════════════════════════════════════════════════════════╗
  ║  SHIPWR3CK • CODELYFE                                                ║
  ║  Author : Randal “Codelyfe” Burger Jr                                ║
  ║  Web    : https://shipwr3ck.com                                      ║
  ║  GitHub : https://github.com/codelyfe                                 ║
  ║  License: GPL-2.0-or-later                                           ║
  ║  Motto  : Build the impossible. Include everyone.                    ║
  ╚══════════════════════════════════════════════════════════════════════╝
*/
const CS_ID = "a11y_cs";

const BLOCKED = [
  /^https:\/\/addons\.opera\.com\//i,
  /^https:\/\/chrome\.google\.com\/webstore\//i,
  /^https:\/\/chromewebstore\.google\.com\//i,
  /^(chrome|opera|edge|about|chrome-extension|moz-extension):/i
];

const isAllowedUrl = (u) =>
  !!u && (/^https?:|^file:/.test(u)) && !BLOCKED.some(re => re.test(u));

chrome.runtime.onInstalled.addListener(init);
chrome.runtime.onStartup.addListener(init);

async function init() {
  const { enabled } = await getStore({ enabled: true });
  await ensureRegistration(enabled);
  await applyToAllTabs(enabled);
}

chrome.storage.onChanged.addListener(async (changes, area) => {
  if (area !== "local" || !("enabled" in changes)) return;
  const on = !!changes.enabled.newValue;
  await ensureRegistration(on);
  await applyToAllTabs(on);
});

async function ensureRegistration(on) {
  try { await chrome.scripting.unregisterContentScripts({ ids: [CS_ID] }); } catch {}
  if (!on) return;
  await chrome.scripting.registerContentScripts([{
    id: CS_ID,
    matches: ["<all_urls>"],
    excludeMatches: [
      "https://addons.opera.com/*",
      "https://chrome.google.com/*",
      "https://chromewebstore.google.com/*"
    ],
    js: ["content.js"],
    runAt: "document_idle",
    allFrames: false
  }]);
}

async function applyToAllTabs(on) {
  const tabs = await chrome.tabs.query({});
  for (const t of tabs) {
    if (!t.id || !isAllowedUrl(t.url)) continue;
    if (on) {
      try {
        await chrome.scripting.executeScript({
          target: { tabId: t.id },
          files: ["content.js"]
        });
      } catch {}
    } else {
      try { await chrome.tabs.sendMessage(t.id, { type: "a11y:disable" }); } catch {}
    }
  }
}

function getStore(defaults) {
  return new Promise(res => chrome.storage.local.get(defaults, res));
}
