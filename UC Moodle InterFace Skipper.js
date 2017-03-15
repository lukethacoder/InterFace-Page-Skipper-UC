// ==UserScript==
// @name         UC Moodle InterFace Skipper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  skip that damn interface thingo
// @author       lukethahacker
// @match        https://www.canberra.edu.au/myuc-u/study-tools/InterFace
// @grant        none
// ==/UserScript==

(function() {
    'use strict'; 
    // Your code here...
    location.href = "https://learnonline.canberra.edu.au/login/index.php?authCAS=CAS";
})();
