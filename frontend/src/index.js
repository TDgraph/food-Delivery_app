import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import the bowser router
import { BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // wrap the App in the browser router
  <BrowserRouter>
   <App />
  </BrowserRouter>
   
  
);


reportWebVitals();
