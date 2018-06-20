import React from 'react'
import { Stylesheet, Text, View, Button, Alert } from 'react-native'

import questions from '../lib/questionnaire/questions'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      survey: {}
    }
  }
  // functions
  buttonHandler (qNo, score) {
    Alert.alert('touched')
    let scoreObj = {}
    scoreObj[qNo]=score
    console.log(scoreObj)
  }
  nextQuestion () {
    if (this.state.index < questions.length) {
      this.setState({index: this.state.index + 1})
    }
    // breaks after last question fix later
  }
  render () {
    let displayedQuestion = questions[this.state.index]
    console.log(this.state)
    return (
      <View>
        <Text>{displayedQuestion.title}</Text>
        {displayedQuestion.responses.map(response => {
          if (response.response === null) {
            return (
              <Button
                key={response.score}
                title='placeholder'
                value={response.score}
                onPress={() => this.buttonHandler(displayedQuestion.qNo, response.score)}
              />
            )
          } else {
            return (
              <Button
                key={response.score}
                title={response.response}
                value={response.score}
                onPress={this.buttonHandler}
              />
            )
          }
        })}
        <Button
          onPress={this.nextQuestion.bind(this)}
          title='Next'
          color='#841584'
        />
      </View>
    )
  }
}
