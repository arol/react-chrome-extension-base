const greet = (name) => console.log(`Hello, ${name}`)

greet('Jon Snw')


chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
  console.log("received Message", req)
  
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    let url = tabs[0].url;
    console.log('from background', url)

    chrome.tabs.sendMessage(tabs[0].id, {actionType:'show-url', url})
  });

  sendResponse({ack:true})
})