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

export default function EmailScreen() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
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
              Vamos começar!
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins_600SemiBold',
                fontSize: 26,
                color: '#000000',
              }}>
              Qual é o seu e-mail?
            </Text>
            <FormInput
              value={email}
              placeholder="E-mail"
              onChangeText={setEmail}
              inputMode="email"
              keyboardType="email-address"
            />
            <Text
              style={{
                fontFamily: 'Poppins_400Regular',
                fontSize: 12,
                color: '#4D4D4D',
              }}>
              Use um endereço de e-mail válido. {email}
            </Text>
          </MainForm>
          <ContinueContainer>
            <ContinueButton
              onPress={() => {
                navigation.navigate('Password', {
                  email: email,
                });
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
