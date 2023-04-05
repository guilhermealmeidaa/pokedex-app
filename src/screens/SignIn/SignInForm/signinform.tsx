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
  InputContainer,
  MainForm,
} from '../styles';
import auth from '@react-native-firebase/auth';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User Signed in!');
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
              Entrar
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
              Bem vindo de volta!
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins_600SemiBold',
                fontSize: 26,
                color: '#000000',
              }}>
              Preencha os dados
            </Text>
            <InputContainer style={{marginTop: 20}}>
              <Text>Email</Text>
              <FormInput
                value={email}
                placeholder="E-mail"
                onChangeText={setEmail}
                inputMode="email"
                keyboardType="email-address"
              />
            </InputContainer>
            <InputContainer>
              <Text style={{marginTop: 15}}>Senha</Text>
              <FormInput
                value={password}
                placeholder="E-mail"
                onChangeText={setPassword}
                inputMode="email"
                keyboardType="email-address"
              />
            </InputContainer>
          </MainForm>
          <ContinueContainer>
            <ContinueButton
              onPress={() => {
                signIn;
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins_600SemiBold',
                  fontSize: 18,
                  color: '#fff',
                }}>
                Continuar
              </Text>
            </ContinueButton>
          </ContinueContainer>
        </Container>
      </SafeAreaView>
    </View>
  );
}
