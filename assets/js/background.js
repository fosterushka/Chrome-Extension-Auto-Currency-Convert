chrome.declarativeContent.onPageChanged.removeRules(undefined,function () {
   chrome.declarativeContent.onPageChanged.addRules([{
       conditions: [new chrome.declarativeContent.PageStateMatcher({
           pageUrl: {hostEquals: 'www.swap.gg'},
       })
       ],
        action: [new chrome.declarativeContent.ShowPageAction()]
   }]);
});

