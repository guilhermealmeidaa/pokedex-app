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

export default function PasswordScreen({route}: any) {
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {email} = route.params;
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
              Agora...
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins_600SemiBold',
                fontSize: 26,
                color: '#000000',
              }}>
              Crie uma senha
            </Text>
            <FormInput
              value={password}
              placeholder="Senha"
              onChangeText={setPassword}
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
                navigation.navigate('Name', {
                  email: email,
                  password: password,
                });
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
