import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Questions extends React.Component {
  render () {
    return (
      <View>
        <Text>{this.props.question}</Text>
      </View>
    )
  }
}
