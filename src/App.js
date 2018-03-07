/**
 * App Class
 */

import React, { Component } from 'react';
import {View} from 'react-native';
import Root from './Router';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';

const createStoreWithMiddleware=applyMiddleware(thunk)(createStore);
const store=createStoreWithMiddleware(reducers);

export default class App extends Component{
  render() {
    return (
      <View style={{flex: 1}}>
       <Provider store={store}>
        <Root/>
      </Provider>       
      </View>
    );
  }
}


