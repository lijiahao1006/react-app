import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './view/App';
import reducer from './reducers/reducer';

// 创建store
const store = createStore(reducer);
const element = <App />;

// console.log(store.getState().counter.a)


ReactDom.render(
    <Provider store={store}>
      {element}
    </Provider>,
    document.getElementById('app')
)