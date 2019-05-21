//Check if it a print page
if(document.title.startsWith('Gmail') || document.title.startsWith('mail')) {
    //Get user options
    var hideGmailLogo = true;
    var hideEmail = false;
    var hideSubject = false;
    var hideContactDetails = false;
    chrome.storage.sync.get(['hideGmailLogo', 'hideEmail', 'hideSubject', 'hideContactDetails'], function(items) {
        if(typeof items.hideGmailLogo !== 'undefined') hideGmailLogo = items.hideGmailLogo;
        if(typeof items.hideEmail !== 'undefined') hideEmail = items.hideEmail;
        if(typeof items.hideSubject !== 'undefined') hideSubject = items.hideSubject;
        if(typeof items.hideContactDetails !== 'undefined') hideContactDetails = items.hideContactDetails;
        hide();
    })

    function hide() {
        if(hideGmailLogo) {
            $("div.bodycontainer table tbody img.logo").parent().hide();
            $("div.bodycontainer table tbody img.logo").hide();
            $(".wrapper div.header").hide();
        }
        if(hideEmail) {
            $("body > div > table").siblings("hr").hide();
            $("body > div > table").hide();
        }
        if(hideSubject) {
            $("body > div > div > table:nth-child(1)").next().hide();
            $("body > div > div > table:nth-child(1)").hide();
        }
        if(hideContactDetails) {
            $("table.message > tbody > tr:nth-child(1)").hide();
            $("table.message > tbody > tr:nth-child(2)").hide();
            $("div.wrapper > div.body > div.mail-header").hide();
        }
    }
}