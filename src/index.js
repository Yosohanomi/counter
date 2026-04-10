import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { store } from './redux/reducer/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <Counter/>
    </Provider>
    
  </React.StrictMode>
);

