import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './sass/_main.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
   <Provider store={store}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </Provider>
)
