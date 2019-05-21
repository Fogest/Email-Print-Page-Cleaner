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
        $("<style>").prop("type", "text/css").html("@media print{div.bodycontainer table tbody img.logo{display:none;}}").appendTo("head");
        if(document.title.startsWith('mail')) {
            $("<style>").prop("type", "text/css").html("@media print{.wrapper div.header{display:none;}}").appendTo("head");
        }
    }
    if(hideEmail) {
        $("<style>").prop("type", "text/css").html("@media print{body > div > table{display:none;}}").appendTo("head");
        $("<style>").prop("type", "text/css").html("@media print{body > div > hr{display:none;}}").appendTo("head");
    }
    if(hideSubject) {
        $("<style>").prop("type", "text/css").html("@media print{body > div > div > table:nth-child(1){display:none;}}").appendTo("head");
        $("<style>").prop("type", "text/css").html("@media print{body > div > div > hr:nth-child(2){display:none;}}").appendTo("head");
    }
    if(hideContactDetails) {
        $("<style>").prop("type", "text/css").html("@media print{body > div > div > table:nth-child(3) > tbody > tr:nth-child(1){display:none;}}").appendTo("head");
        $("<style>").prop("type", "text/css").html("@media print{body > div > div > table:nth-child(3) > tbody > tr:nth-child(2){display:none;}}").appendTo("head");
        $("<style>").prop("type", "text/css").html("@media print{div.wrapper > div.body > div.mail-header{display:none;}}").appendTo("head");
    }
}