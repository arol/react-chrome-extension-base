chrome.runtime.onMessage.addListener(function(req, sender, sendMessage){
  console.log(req)
  sendMessage({ack:true})
})