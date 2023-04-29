import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { YMapsLoader } from './components/YMapsLoader';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages/router';
import './design/base.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <YMapsLoader />
    <RouterProvider router={router} />
  </Provider>
);
