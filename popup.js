'use strict';

$(function() {

  // get the current tab
  chrome.tabs.query({
      active: true,
      currentWindow: true
    //TAKES THE CURRENT TAB AND WE DEFINE A FUNCTION OF THE TAB
    }, function(tabs) {
      // send a message to the content script
      var sendMessage = function(type, data, callback) {
        chrome.tabs.executeScript( {
        //code: 'document.body.style.backgroundColor="orange"'
         file: 'content_script.js'
        });
      };
      // get the session if there is one
        $('#create-session').click(function() {
                  sendMessage('createSession');
                });
        // listen for clicks on the share URL box

      });
    }
  );
