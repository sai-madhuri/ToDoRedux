import * as React from 'react';
import * as  ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import {Provider} from 'react-redux';
import rootReducer from "./reducers";

const store = createStore(rootReducer)

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )