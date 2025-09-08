# A11y-Widget-Place-Anywhere-Opera-Extension

[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](LICENSE)
![Vanilla JS](https://img.shields.io/badge/JS-vanilla-informational)
![No Dependencies](https://img.shields.io/badge/deps-none-success)
![Accessible](https://img.shields.io/badge/a11y-WCAG%202.1%2B-brightgreen)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-ff69b4)

A privacy-friendly accessibility toolkit for Opera that works on (almost) any site. It adds a floating button that opens a panel with options like dark mode, high-contrast, text scaling/spacing, dyslexia-friendly fonts, always-visible focus rings, image hiding, grayscale, pause animations, reading mask, and a smart text-to-speech reader (selection, hover, or page content).

## What it does

* **Visual adjustments:** Strong dark mode, high contrast, larger text, extra spacing, underline links, grayscale, hide images, pause animations, highlight focus.
* **Reading aids:** Reading mask that follows your cursor; “Hover to Read” button; auto-read of selected text; play/pause/stop controls with adjustable rate & pitch.
* **Navigation help:** A “Skip to content” link appears for keyboard users.
* **Persistence:** Your settings are remembered per browser (locally).
* **Privacy:** No analytics, no external requests.

> Note: Extensions are blocked on certain pages (e.g., Opera Add-ons and Chrome Web Store listings). That’s expected. ([Opera Help][1])

---

## Install from GitHub (Unpacked, for development)

Use this when you want to try or tweak the extension without publishing.

1. **Get the files**

   * Download the repository as a ZIP from GitHub and extract it, or clone it.
2. **Open Opera’s Extensions page**

   * Go to `opera://extensions` (or `opera:extensions`).
3. **Enable Developer mode**

   * Toggle **Developer mode** on (top-right). ([Opera Help][1])
4. **Load the extension**

   * Click **Load unpacked** and select the folder that contains `manifest.json`. ([Opera Help][1])
5. **Test on any website**

   * Open a normal page (not an add-ons store page). You should see the floating button; click it to open the panel.

---

## Permissions & data

* **Storage:** Saves your on/off toggle and preferences locally.
* **Scripting:** Injects the UI and styles on pages so features work.
* **No tracking:** The extension doesn’t send data to any server.

---

## Known limitations

* Won’t run on Opera’s add-ons pages or the Chrome Web Store by design. ([Opera Help][1])
* Text-to-speech uses your system/browser voices; availability varies by OS.

---

## Troubleshooting

* **I don’t see the button:** Make sure you’re not on a blocked domain (store pages). Refresh the tab after installing.
* **Developer mode missing options:** Confirm you’re on `opera://extensions` and **Developer mode** is enabled (top-right). ([Opera Help][1])
* **Packed install fails:** Try **Load unpacked** instead, or re-pack from `opera://extensions → Pack extension`. ([Opera Help][2])

---

## Credits

Built from the “A11y Widget — Place Anywhere” project by ShipWr3ck & Codelyfe, adapted for Opera.

---

## License

See the repository’s LICENSE file.

---

[1]: https://help.opera.com/en/extensions/testing/ "Testing and Debugging"
[2]: https://help.opera.com/en/extensions/basics/ "The Basics of Making an Extension"
[3]: https://www.reddit.com/r/operabrowser/comments/nvja92/am_i_able_to_add_an_extension_from_my_files/ "Am I able to add an extension from my files rather than from ..."
[4]: https://help.opera.com/en/extensions/publishing-guidelines/ "Publishing Guidelines"
