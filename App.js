/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ListSample from './app/components'
import { store } from './app/store'

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store} >
        <ListSample />
      </Provider>
    )
  }
}
