import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.scss';
import store from './store/Store'
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import('./App'))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<p>Still Loading...</p>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
