import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Questions from './src/components/questions'

import * as sectionOne from './src/lib/questionnaire/sectionOne'

export default class App extends React.Component {
  render () {
    const question = sectionOne.q1a.title
    return (
      <View style={styles.container}>
        <Questions question={question} />
        <Text>Hi Emily!</Text>
        <Text>testing reload</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
