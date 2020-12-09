import React from 'react'
import {Alert} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {AccountsScreen} from '../screens/accountsScreen/accounts'
//import {DashboardScreen} from '../screens/dashboardScreen/dashboardScreen'
import {Dashboard} from '../screens/dashboardScreen/dashboard'
import {Logout} from '../screens/logoutScreen/logout'

//constants
import * as constants from '../constants'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function bottomTabs({navigation} : any) {
     
    const ok = () => {
        navigation.navigate(constants.navigation.stackNav , {screen : constants.ScreenName.Login})
      }
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: constants.Colors.themecolor, 
        inactiveTintColor: constants.Colors.medium_strong_gray,
        }}>
            <Tab.Screen name="Home" component={Dashboard}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" color={color} size={size}/>
                    ),
                }}
                
            />
            <Tab.Screen name="Accounts" component={AccountsScreen}
                options={{
                    tabBarLabel: 'Accounts',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="file-text" color={color} size={size} />
                    ),
                }} />

            <Tab.Screen name="Logout" component={Logout}
            listeners={{
                tabPress: e => {
                   e.preventDefault(); // Use this to navigate somewhere else
                  Alert.alert(
                    'Log out',
                    'Are you sure you want to logout ?',
                    [
                      {text: 'No', onPress: () => console.log('cancel')},
                      {text: 'Yes', onPress: ok},
                    ],
                    { cancelable: false }
                  )
                },
              }}
                options={{
                    tabBarLabel: 'Logout',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="sign-out" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default bottomTabs;