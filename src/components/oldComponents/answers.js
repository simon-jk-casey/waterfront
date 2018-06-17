import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

export default class Answers extends React.Component {
  render () {
    const styles = StyleSheet.create({
      touchable: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 15
      }
    })
    return (
      <View>
        {this.props.responses.map(response => {
          if (response.response === null) {
            return (
              <TouchableHighlight
                key={response.score}
                style={styles.touchable}
                onPress={this.props.touchHandler}
                value={response.score}
              >
                <Text>PLACEHOLDER</Text>
              </TouchableHighlight>
            )
          } else {
            return (
              <TouchableHighlight
                key={response.score}
                style={styles.touchable}
                onPress={this.props.touchHandler}
                value={response.score}
              >
                <Text>{response.response}</Text>
              </TouchableHighlight>

            )
          }
        })}
      </View>
    )
  }
}
