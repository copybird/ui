import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import { unregister } from './utils/serviceWorker';
import Routes from './routes';
import reducers from './reducers';
import rootEpic from './epics';

import 'rxjs';

const epicMiddleware = createEpicMiddleware();
const logger = createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(logger, epicMiddleware)));

if(process.env.ENV === 'local'){
  store = createStore(reducers, applyMiddleware(epicMiddleware));
}

epicMiddleware.run(rootEpic);

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes/>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

unregister();
