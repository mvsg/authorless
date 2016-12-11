var on = true;
var current = 0;
var hide = function(){
    chrome.tabs.insertCSS(null, {file: "style.css"});
};
var setIcon = function(){
    chrome.browserAction.setIcon({path:"icon" + current + ".png"});
};

//Set icon when extension is laoded
setIcon();

//When new page is loaded check if "on" is false
chrome.webNavigation.onCompleted.addListener(function(details) {
  if (on == false) {
    hide();
  }
});

// Called when the user clicks on the extension icon
chrome.browserAction.onClicked.addListener(function(tab) {
    // Hide
    if (on) {
        hide();
        on = false;
        current = 1;
    }
    //Show
    else {
        chrome.tabs.insertCSS(null, {file: "style2.css"});
        on = true;
        current = 0;
    }
    //Set icon
    setIcon();
});