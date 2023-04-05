import {SafeAreaView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import Reactotron from 'reactotron-react-native';
import firestore from '@react-native-firebase/firestore';
import {useState} from 'react';

export function MyAccount() {
  const [name, setName] = useState('');
  const user = auth().currentUser;
  const userName = firestore()
    .collection('users')
    .doc(user?.uid)
    .onSnapshot(doc => {
      setName(doc._data.user.name);
    });

  Reactotron.log(user);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '50%',
          height: '50%',
          margin: 'auto',
          backgroundColor: 'blue',
        }}>
        <Text>{name}</Text>
      </View>
    </View>
  );
}
