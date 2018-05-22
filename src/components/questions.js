import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as questions from '../lib/questionnaire/sectionOne'

export default class Questions extends React.Component {
  render () {
    return (
      <View>
        <Text>{this.props.question}</Text>
      </View>
    )
  }
}
