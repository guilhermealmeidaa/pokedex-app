import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import * as Icon from 'react-native-feather';
import {
  Container,
  ContinueButton,
  ContinueContainer,
  FormInput,
  Header,
  MainForm,
} from '../styles';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function NameScreen({route}: any) {
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const {email, password} = route.params;

  const user = {
    email: email,
    password: password,
    name: name,
  };
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        firestore()
          .collection('users')
          .doc(userCredential.user.uid)
          .set({user})
          .catch(error => console.log('falha', error));
        console.log('User account created & signed in!');
        // navigation.navigate()
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View>
      <SafeAreaView>
        <Container>
          <Header>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon.ChevronLeft stroke="#000" />
            </TouchableOpacity>
            <Text style={{fontSize: 18, fontFamily: 'Poppins_600SemiBold'}}>
              Criar conta
            </Text>
            <Icon.ChevronRight stroke="#fff" />
          </Header>
          <MainForm>
            <Text
              style={{
                fontFamily: 'Poppins_400Regular',
                fontSize: 26,
                color: '#4D4D4D',
              }}>
              Pra finalizar
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins_600SemiBold',
                fontSize: 26,
                color: '#000000',
              }}>
              Qual o seu nome?
            </Text>
            <FormInput
              value={name}
              placeholder="Senha"
              onChangeText={setName}
              //   inputMode="email"
              //   keyboardType="email-address"
            />
            <Text
              style={{
                fontFamily: 'Poppins_400Regular',
                fontSize: 12,
                color: '#4D4D4D',
              }}>
              Sua senha deve ter pelo menos 8 caracteres
            </Text>
          </MainForm>
          <ContinueContainer>
            <ContinueButton
              onPress={() => {
                signUp();
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins_600SemiBold',
                  fontSize: 18,
                  color: '#fff',
                }}>
                Criar conta
              </Text>
            </ContinueButton>
          </ContinueContainer>
        </Container>
      </SafeAreaView>
    </View>
  );
}
