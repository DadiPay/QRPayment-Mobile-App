import React from 'react'
import { View } from 'react-native/types'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import SignUp from '../screens/SignUp';
import VerifyIdentity from '../screens/VerifyIdentity';
import RecoverPassword from '../screens/RecoverPassword';
import RecoveryLinkSent from '../screens/RecoveryLinkSent';
import SetTransactionPin from '../screens/SetTransactionPin';
import ConfirmTransactionPin from '../screens/ConfirmTransactionPin';
import VerifyPhone from '../screens/VerifyPhone';
import PasswordOtp from '../screens/PasswordOtp';
import CreateNewPassword from '../screens/CreateNewPassword';


const Stack = createStackNavigator()
// const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='Login' component={Login} options={{
          headerShown: false
        }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Verify' component={VerifyIdentity} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Verify_Phone' component={VerifyPhone} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Recover_Password' component={RecoverPassword} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Recovery_Link_Sent' component={RecoveryLinkSent} options={{
          headerShown: false
        }} />

        {/* Open only to link in mail */}
        <Stack.Screen name='Password_Otp' component={PasswordOtp} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Create_New_Password' component={CreateNewPassword} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Set_Transaction_Pin' component={SetTransactionPin} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Confirm_Transaction_Pin' component={ConfirmTransactionPin} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default AuthNavigator