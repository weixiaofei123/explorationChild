import React from 'react'
import ReactDOM from 'react-dom'
import App from './container/router/index.js'
import './static/public.css'
import { Provider } from 'react-redux'
import Store from './store/store.js'



const Tpp=<Provider store={Store}>
    			<App />
  			</Provider>



ReactDOM.render(Tpp,document.getElementById("root"));