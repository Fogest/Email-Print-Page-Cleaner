// Saves options to chrome.storage.sync.
function save_options() {
  var hideGmailLogo = document.getElementById('hideGmailLogo').checked;
  var hideEmail = document.getElementById('hideEmail').checked;
  var hideSubject = document.getElementById('hideSubject').checked;
  var hideContactDetails = document.getElementById('hideContactDetails').checked;
  alert("Here");
  chrome.storage.sync.set({
    hideGmailLogo: hideGmailLogo,
    hideEmail: hideEmail,
    hideSubject: hideSubject,
    hideContactDetails: hideContactDetails
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = 'Saved';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  alert();
  chrome.storage.sync.get({
  hideGmailLogo: true,
  hideEmail: false,
  hideSubject: false,
  hideContactDetails: false
  }, function(items) {
    document.getElementById('hideGmailLogo').checked = items.hideGmailLogo;
    document.getElementById('hideEmail').checked = items.hideEmail;
    document.getElementById('hideSubject').checked = items.hideSubject;
    document.getElementById('hideContactDetails').checked = items.hideContactDetails;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);