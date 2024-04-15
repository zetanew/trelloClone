import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';
import { toast } from 'react-toastify'; // Import the toast module

import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <div>
      <App />
      <ToastContainer />
    </div>
  </Provider>
);
