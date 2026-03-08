<<<<<<< HEAD
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/Store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
   
  <Provider store={store}>
  <BrowserRouter>
  

    <App />
  
  </BrowserRouter>
  </Provider>

  
 
)
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/Store.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
>>>>>>> 5ad9cbf (add Moke.json, cart, cartstore)
