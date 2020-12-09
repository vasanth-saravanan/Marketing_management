// In App.js in a new project

import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import {Splash} from '../screens/splashScreen/splashScreen'
import {LoginScreen} from '../screens/loginScreen/loginScreen'
import {CompanyCodeScreen} from '../screens/companyCodeScreen/companyCodeScreen'
import {SettingsScreen} from '../screens/settingsScreen/settingsScreen'
import {Sales} from '../screens/salesScreen/sales'
import {ExpectedIncome} from '../screens/expectedIncomeScreen/expectedIncome'
import {ExpectedPayable} from '../screens/expectedPayable/expectedPayable'
import {PaymentCollectionsScreen} from '../screens/paymentCollections/paymentCollectionsScreen'

//constants 
import * as constants from '../constants'

const Stack = createStackNavigator();

function StackNav() {
  return (
      <Stack.Navigator>
        <Stack.Screen name={constants.ScreenName.splash} component={Splash} options={{headerShown: false,}}/>
        <Stack.Screen name={constants.ScreenName.company_code} component={CompanyCodeScreen} options={{headerShown: false,}}/>
        <Stack.Screen name={constants.ScreenName.Login} component={LoginScreen} options={{headerShown: false,}}/>
        <Stack.Screen name={constants.ScreenName.settings} component={SettingsScreen} options={{headerShown: false,}}/>
        <Stack.Screen name={constants.ScreenName.sales} component={Sales} options={{headerShown: false,}}/>
        <Stack.Screen name={constants.ScreenName.exp_income} component={ExpectedIncome} options={{headerShown: false,}}/>
        <Stack.Screen name={constants.ScreenName.exp_payable} component={ExpectedPayable} options={{headerShown: false,}}/>
        <Stack.Screen name={constants.ScreenName.payment_collections} component={PaymentCollectionsScreen} options={{headerShown: false,}}/>
      </Stack.Navigator>
  );
}

export default StackNav;
