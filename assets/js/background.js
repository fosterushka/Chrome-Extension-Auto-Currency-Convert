chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({hide:true}), function () {
        console.log('OKAY HIDE')
    }
});

chrome.declarativeContent.onPageChanged.removeRules(undefined,function () {
   chrome.declarativeContent.onPageChanged.addRules([{
       conditions: [new chrome.declarativeContent.PageStateMatcher({
           pageUrl: {hostEquals: 'www.swap.gg'},
       })
       ],
        action: [new chrome.declarativeContent.ShowPageAction()]
   }]);
});

