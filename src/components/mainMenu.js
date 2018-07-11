import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native'

export default class MainMenu extends React.Component {
  constructor (props) {
    super(props)
  }

  touchHandler () {
    Alert.alert('touchy touchy')
  }

  render () {
    return (
      <View>
        <TouchableHighlight onPress={this.touchHandler}>
          <Text>About</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.touchHandler}>
          <Text>Begin Survey</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.touchHandler}>
          <Text>Saved Surveys</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.touchHandler}>
          <Text>Previous Results</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.touchHandler}>
          <Text>Log Out</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
