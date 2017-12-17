(function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        let activeTab = tabs[0];
        let url = activeTab.url.split('/');
        if (url[2] === 'codepen.io') {
            url = `https://codepen.io/${url[3]}/debug/${url[5]}`;
            
            chrome.tabs.create({ url: url });
        } else {
            alert('This extension can only be used for CodePen.io')
        }
    });
})()