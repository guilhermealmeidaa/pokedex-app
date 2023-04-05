import {
  Poppins_600SemiBold,
  Poppins_900Black_Italic,
  useFonts,
} from '@expo-google-fonts/poppins';
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  InputButtom,
  Container,
  Header,
  ImageContainer,
  TrainerIcon,
  InputLogin,
} from './styles';
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';

export default function InitialScreen() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#FFF'}}>
      <SafeAreaView>
        <Container>
          <Header>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
                fontWeight: '600',
                fontFamily: 'Poppins_500Medium',
              }}>
              Pular
            </Text>
            <Icon.ArrowRight stroke="#000" width={20} />
          </Header>
          <ImageContainer>
            <TrainerIcon
              source={require('../../assets/trainers/trainerInitialScreen.png')}
            />
          </ImageContainer>
          <Text
            style={{
              color: 'black',
              fontSize: 26,
              textAlign: 'center',
              marginBottom: 10,
              fontFamily: 'Poppins_500Medium',
            }}>
            Está pronto para essa aventura?
          </Text>
          <Text
            style={{
              color: '#666666',
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '300',
              fontFamily: 'Poppins_400Regular',
            }}>
            Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!
          </Text>
          <InputButtom onPress={() => navigation.navigate('SignUp' as never)}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'Poppins_600SemiBold',
              }}>
              Criar conta
            </Text>
          </InputButtom>
          <InputLogin onPress={() => navigation.navigate('SignIn' as never)}>
            <Text
              style={{
                color: '#173EA5',
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'Poppins_600SemiBold',
              }}>
              Já tenho uma conta
            </Text>
          </InputLogin>
        </Container>
      </SafeAreaView>
    </View>
  );
}
