import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

import Questions from './questions'
import Answers from './answers'

import qList from '../lib/questionnaire/questions'

export default class Form extends React.Component {
  render () {
    return (
      <View>
        <Questions
          question={this.props.question}
          qNo={this.props.qNo}
        />
        <Answers
          responses={this.props.responses}
          touchHandler={this.props.handler}
        />
      </View>
    )
  }
}
