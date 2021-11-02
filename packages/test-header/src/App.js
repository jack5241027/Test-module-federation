// import { injectIntoGlobalHook } from 'react-refresh/cjs/react-refresh-runtime.development'
import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import './index.css'

// injectIntoGlobalHook(window)
// window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject(ReactDOM)

const App = () => {
  console.log('2')
  return (
    <div>
      <Header />
      <div>I'm the header app.</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
