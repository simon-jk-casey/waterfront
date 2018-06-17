import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

import Questions from './src/components/questions'
import Answers from './src/components/answers'
import Form from './src/components/form'

import qList from './src/lib/questionnaire/questions'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  pressTest () {
    Alert.alert('shit')
  }

  nextQuestion () {
    if (this.state.index < qList.length) {
      this.setState({ index: this.state.index + 1})
    } else {
      // BREAKS HERE DUE TO THE SINGLE VIEW - RESOLVE LATER
    }
  }

  render () {
    let displayQ = qList[this.state.index]
    return (
      <View style={styles.container}>
        <Form
          question={displayQ.title}
          qNo={displayQ.qNo}
          responses={displayQ.responses}
          handler={this.pressTest}
        />
        <Button
          onPress={this.nextQuestion.bind(this)}
          title='Next'
          color='#841584'
        />
      </View>
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

// some dev notes:
// --Components for questions will need conditionals for sizing based on whether there is a response or not - ie a midrange value, also for is a question has additional notes in the object
