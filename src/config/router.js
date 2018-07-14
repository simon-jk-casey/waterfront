import { createStackNavigator } from 'react-navigation'

import Auth from '../components/auth'
import MainMenu from '../components/mainMenu'
import Form from '../components/form'

export const RootStack = createStackNavigator(
  {
    Home: Auth,
    MainMenu: MainMenu,
    Survey: Form
  },
  {
    initialRouteName: 'Home'
  }
)
