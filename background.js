var on = true;
var current = 0;
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
    if (on) {
        chrome.tabs.insertCSS(null, {file: "style.css"});
        on = false;
        current = 1;
    }
    else {
        chrome.tabs.insertCSS(null, {file: "style2.css"});
        on = true;
        current = 0;
    }
    chrome.browserAction.setIcon({path:"icon" + current + ".png"});
});
