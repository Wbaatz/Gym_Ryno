import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from'./App';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<StrictMode> 
   <App />
</StrictMode>
  
);