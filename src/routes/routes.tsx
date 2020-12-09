// In App.js in a new project

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//constants
import * as constants from '../constants'

import StackNav from './stack'
import bottomTabs from './bottomTabs'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={constants.navigation.stackNav} component={StackNav} options={{headerShown: false,}}/>
        <Stack.Screen name={constants.navigation.bottomTab} component={bottomTabs} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//const mapStateToProps = state => ({
 // Uname : state.uname
//});
export default Routes;


//<Stack.Screen name="Articles" component={Dashboard} options={{headerTintColor:"#fff",headerStyle : {backgroundColor : "#00a1e5"}}}/>
       // <Stack.Screen name="check" component={Check} options={{headerShown: false,}}/>