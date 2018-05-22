import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Answers extends React.Component {
  render () {
    return (
      <View>
        {this.props.responses.map(response => {
          if (response.response === null) {
            return (
              <Text key={response.score}>PLACEHOLDER</Text>
            )
          } else {
            return (
              <Text key={response.score}>{response.response}</Text>
            )
          }
        })}
      </View>
    )
  }
}
