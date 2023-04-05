import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {AuthStack} from './AuthStack';
import {AppStack} from './AppStack';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export function Router() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const userno = false;
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(_user => {
      setUser(_user);
    });

    return unsubscribe;
  }, []);
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
