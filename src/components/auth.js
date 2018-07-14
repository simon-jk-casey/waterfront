import React from 'react'
import { Stylesheet, TextInput, Text, View, Button } from 'react-native'

export default class Auth extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  authenticate () {
    console.log(this.state);
    // return fetch('http://192.168.1.12:3000/api/v1/login', {
    //   method: 'post',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: this.state
    // }).then((res) => console.log(res))
  }

  render () {
    return (
      <View>
        <TextInput
          placeholder='Email Address'
          style={{height: 40, borderColor: 'black', borderWidth: 2}}
          value={this.state.email}
          keyboardType='email-address'
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          placeholder='Password'
          style={{height: 40, borderColor: 'black', borderWidth: 2}}
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})}
        />
        <Button
          title='Log In'
          color='#841584'
          onPress={this.authenticate}
        />
      </View>
    )
  }
}
