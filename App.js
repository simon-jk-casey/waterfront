import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as questions from './src/lib/questions/sectionOne'

export default class App extends React.Component {
  render() {
    const question = questions.q1a
    return (
      <View style={styles.container}>
        <Text>{question.title}</Text>
        <Text>{question.responses[0].response}</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
