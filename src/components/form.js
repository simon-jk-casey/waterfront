import React from 'react'
import { Stylesheet, Text, View, Button } from 'react-native'

import questions from '../lib/questionnaire/questions'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      surveyComplete: false,
      index: 0,
      survey: [],
      totalScore: 0
    }
  }

  // functions
  buttonHandler (qNo, score) {
    let scoreObj = {}
    scoreObj[qNo] = score
    console.log('scoreObject: ', scoreObj)
    this.setState(prevState => ({
      survey: [...prevState.survey, scoreObj],
      totalScore: prevState.totalScore + score
    }))
    if (this.state.index < questions.length - 1) {
      this.setState({index: this.state.index + 1})
    } else {
      this.setState({surveyComplete: true})
    }
  }

  submitScore () {
    const data = {
      //  hardcoding collectiopPointId until enrolment setup
      collectionPointId: 1,
      surveyData: this.state.survey,
      totalScore: this.state.totalScore
    }
    return fetch('http://192.168.1.11:3000/api/v1/assessment', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => console.log(res))
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
