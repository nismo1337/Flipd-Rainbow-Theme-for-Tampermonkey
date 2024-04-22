// ==UserScript==
// @name         rainbow colors for flipd
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Meow
// @author       nismo1337
// @match        https://flipd.gg/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function rainbowify(color) {
        let hue = Math.floor(Date.now() / 10) % 360;
        return `hsl(${hue}, 100%, 50%)`;
    }

    function applyAnimatedRainbowToElement(element, property) {
        let originalColor = window.getComputedStyle(element, null).getPropertyValue(property);
        element.style.setProperty(property, rainbowify(originalColor), 'important');
    }

    function applyAnimatedRainbowToElements(selector, property) {
        let elements = document.querySelectorAll(selector);
        elements.forEach(element => applyAnimatedRainbowToElement(element, property));
    }

    setInterval(function() {
        applyAnimatedRainbowToElements('.messagecolor-colored, .showthreadtopbar, .sceditor-button.active, .pagination_current, .pagination_currentmobile', 'background-color');
        applyAnimatedRainbowToElements('.sidebarbutton:hover, .sceditor-button:hover, .sceditor-button.active, .unreadcount', 'background-color');
        applyAnimatedRainbowToElements('.tselected, .tselected:hover, .main-sell-button, .numbers11', 'background-color');
        applyAnimatedRainbowToElements('.dropdown-content::before', 'border-bottom-color');
        applyAnimatedRainbowToElements('.dropdown-content::before', 'border-left-color');
        applyAnimatedRainbowToElements('.sidebarstats_1', 'background-image');
        applyAnimatedRainbowToElements('.sidebarstats_1:hover', 'box-shadow');
        applyAnimatedRainbowToElements('.newmessagesicon, .headericon', 'color');
        applyAnimatedRainbowToElements('.scrolltotop, .thread_status.newhotfolder:before, #backtop i, .sidestat, .sidestat a, .footer_designed, .thread_status, .newfolder:before, .index-num, .text-yellow, .stats-count, .thread_status.newhotfolder::before, .footer-nav h3, .footer-nav ul li:hover i', 'color');
        applyAnimatedRainbowToElements('.headertop, .scrolltotop, .blockquote', 'border-color');
        applyAnimatedRainbowToElements('.blockquote', 'border-bottom-color');
        applyAnimatedRainbowToElements('.fileupload+label, .drop-menu-inner', 'background-color');
        applyAnimatedRainbowToElements('.fileupload+label, .drop-menu-inner', 'background-image');
        applyAnimatedRainbowToElements('.welcomeuser', 'color');
        applyAnimatedRainbowToElements('.back-middleman', 'border-top-color');
        applyAnimatedRainbowToElements('.chat_title', 'background-color');
        applyAnimatedRainbowToElements('.alerts:hover, .alerts.active', 'border-bottom-color');
    }, 100);
})();
