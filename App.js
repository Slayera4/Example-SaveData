import React, { Component } from 'react'
import { View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import rootReducer from './reducers'

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </View>
    )
  }
}

export default class Main extends Component {
  render() {
    return (

      <Provider store={store}>
        <App />
      </Provider>

    );
  }
}
