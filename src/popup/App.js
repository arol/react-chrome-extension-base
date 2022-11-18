import React from 'react'

const App = () => {
  const sayHi = () => {
    chrome.runtime.sendMessage({actionType:'say-hello'})
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={sayHi}>Say Hi</button>
    </div>
  )
}

export default App
