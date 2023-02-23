import { StyleSheet, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login, Signup} from './screens';
import { Header } from './src/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
 

  return (<>
  {/* <NavigationContainer>
      
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Detaille" component={Login} />
      </Tab.Navigator>
    </NavigationContainer> */}
        <Header/>
      <NavigationContainer> 
        <Stack.Navigator
         initialRouteName="Login"
          screenOptions={{
            headerShown: false
          }}
        >
         
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}


const styles = StyleSheet.create({
  
});