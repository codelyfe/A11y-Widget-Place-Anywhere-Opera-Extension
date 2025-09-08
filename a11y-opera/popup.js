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
(function(){
  const wrap = document.getElementById("wrap");
  const toggle = document.getElementById("toggle");

  chrome.storage.local.get({ enabled: true }, ({ enabled }) => {
    setUI(enabled);
  });

  function setUI(on){
    wrap.classList.toggle("on", on);
    toggle.setAttribute("aria-checked", String(!!on));
  }

  function flip(){
    chrome.storage.local.get({ enabled: true }, ({ enabled }) => {
      const next = !enabled;
      chrome.storage.local.set({ enabled: next }, () => setUI(next));
    });
  }

  toggle.addEventListener("click", flip);
  toggle.addEventListener("keydown", (e)=>{ if(e.key===" "||e.key==="Enter"){ e.preventDefault(); flip(); }});
})();
