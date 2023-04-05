import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import InitialScreen from '../screens/Initial/inital';
import SignIn from '../screens/SignIn/sighIn';
import SignInForm from '../screens/SignIn/SignInForm/signinform';
import EmailScreen from '../screens/SignUp/Email/email';
import NameScreen from '../screens/SignUp/Name/name';
import PasswordScreen from '../screens/SignUp/Password/password';
import SignUp from '../screens/SignUp/signUp';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={InitialScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Password"
        component={PasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInForm"
        component={SignInForm}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
