import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

import Questions from './src/components/questions'
import Answers from './src/components/answers'

import qList from './src/lib/questionnaire/questions'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentQuestion: qList[0]
    }
  }
  pressTest () {
    Alert.alert('Button Pressed')
  }

  render () {
    return (
      <View style={styles.container}>
        <Questions question={this.state.currentQuestion.title} />
        <Answers responses={this.state.currentQuestion.responses} />
        <Text>Hi Emily!</Text>
        <Text></Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={this.pressTest}
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
