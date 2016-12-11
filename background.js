var on = true;
var current = 0;
//function to hide Authors
var hide = function(){
    chrome.tabs.insertCSS(null, {file: "style.css"});
};
//function to set extension icon
var setIcon = function(){
    chrome.browserAction.setIcon({path:"icon" + current + ".png"});
};

//Set icon when extension is loaded
setIcon();

//When new page is loaded check if "on" is false
chrome.webNavigation.onCompleted.addListener(function(details) {
  if (on == false) {
    hide();
  }
});

// Called when the user clicks on the extension icon
chrome.browserAction.onClicked.addListener(function(tab) {
    // Hide authors
    if (on) {
        hide();
        on = false;
        current = 1;
    }
    //Show authors
    else {
        chrome.tabs.insertCSS(null, {file: "style2.css"});
        on = true;
        current = 0;
    }
    //Set icon
    setIcon();
});
