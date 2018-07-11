import { createStackNavigator } from 'react-navigation'

import MainMenu from '../components/mainMenu'
import Form from '../components/form'

export const RootStack = createStackNavigator(
  {
    Home: MainMenu,
    Survey: Form
  },
  {
    initialRouteName: 'Home'
  }
)
