import React from 'react';
import  ReactDOM  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>   
//   </React.StrictMode>
// );

ReactDOM.render(
  <BrowserRouter basename="/sites/react-dashboard/">
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);