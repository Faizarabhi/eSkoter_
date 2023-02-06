
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Fontisto } from '@expo/vector-icons';
import { Home, Login } from './screens';
import {View, StyleSheet} from 'react-native'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function LogoTitle() {
  return (
    <View>
      <Fontisto name="map" size={24} color="#239" />
      <Fontisto name="nav-icon-a" size={24} color="#239" />
    </View>
    );
}

