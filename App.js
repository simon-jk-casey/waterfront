import React from 'react'
import { StyleSheet, View } from 'react-native'

import { RootStack } from './src/config/router'

import Form from './src/components/form'
import MainMenu from './src/components/mainMenu'

import qList from './src/lib/questionnaire/questions'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <RootStack />
      // <View style={styles.container}>
      //   <MainMenu />
      //   {/* <Form /> */}
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
