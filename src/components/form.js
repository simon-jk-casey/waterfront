import React from 'react'
import { Stylesheet, Text, View, Button, Alert } from 'react-native'

import questions from '../lib/questionnaire/questions'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      surveyComplete: false,
      index: 0,
      survey: []
    }
  }
  // functions
  buttonHandler (qNo, score) {
    // Alert.alert('touched')
    let scoreObj = {}
    scoreObj[qNo] = score
    console.log('scoreObject: ', scoreObj)
    // this.setState({survey: scoreObj})
    this.setState(prevState => ({
      survey: [...prevState.survey, scoreObj]
    }))
    if (this.state.index < questions.length - 1) {
      this.setState({index: this.state.index + 1})
    } else {
      this.setState({surveyComplete: true})
    }
  }
  // nextQuestion () {
  //   if (this.state.index < questions.length - 1) {
  //     this.setState({index: this.state.index + 1})
  //   } else {
  //     this.setState({surveyComplete: true})
  //   }
  //   // breaks after last question fix later
  // }
  submitScore () {
    console.log('Submitting: ', this.state)
  }

  render () {
    let displayedQuestion = questions[this.state.index]
    console.log(this.state)
    if (!this.state.surveyComplete) {
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
                  onPress={() => this.buttonHandler(displayedQuestion.qNo, response.score)}
                />
              )
            }
          })}
          {/* <Button
            onPress={this.nextQuestion.bind(this)}
            title='Next'
            color='#841584'
          /> */}
        </View>
      )
    } else {
      return (
        <View>
          <Button
            title='submitScore'
            onPress={() => this.submitScore()}
          />
        </View>
      )
    }
  }
}
