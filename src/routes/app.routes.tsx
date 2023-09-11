import { Home } from '@/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator()

export const AppRoutes = () => (
  <Navigator>
    <Screen name="home" component={Home} />
  </Navigator>
)
