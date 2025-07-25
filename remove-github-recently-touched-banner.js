// ==UserScript==
// @name         Remove GitHub Recently Touched Branches Banner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide the "Recently touched branches" warning on GitHub repo pages
// @author       You
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const observer = new MutationObserver(() => {
        const banner = document.querySelector('[class*="RecentlyTouchedBranches-module__Flash"]');
        if (banner) {
            banner.remove();
            console.log('Removed "Recently touched branches" banner.');
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
