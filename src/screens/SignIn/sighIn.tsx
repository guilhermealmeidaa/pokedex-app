import {Text, Touchable, TouchableHighlight, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ButtomContainer,
  Container,
  Header,
  ImageContainer,
  InputButtom,
  InputText,
  LogoIcon,
  TrainerIcon,
} from './styles';
import * as Icon from 'react-native-feather';
import {Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white'}}>
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
          <ImageContainer>
            <TrainerIcon
              source={require('../../assets/trainers/trainerSignInScreen.png')}
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
            Que bom te ver aqui novamente!
          </Text>
          <Text
            style={{
              color: '#666666',
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '300',
              fontFamily: 'Poppins_400Regular',
              marginBottom: 20,
            }}>
            Como deseja se conectar?
          </Text>
          <InputButtom
            onPress={() => navigation.navigate('SignUp' as never)}
            inputColor={'#FFF'}>
            <ButtomContainer>
              <LogoIcon source={require('../../assets/logo/apple.png')} />
              <InputText textColor={'#4D4D4D'}>Continuar com a Apple</InputText>
            </ButtomContainer>
          </InputButtom>
          <InputButtom
            onPress={() => navigation.navigate('SignUp' as never)}
            inputColor={'#FFF'}>
            <ButtomContainer>
              <LogoIcon source={require('../../assets/logo/google.png')} />
              <InputText textColor={'#4D4D4D'}>
                Continuar com o Google
              </InputText>
            </ButtomContainer>
          </InputButtom>
          <InputButtom
            onPress={() => navigation.navigate('SignInForm' as never)}
            inputColor={'#173EA5'}>
            <InputText textColor={'#FFF'}>Continuar com um e-mail</InputText>
          </InputButtom>
        </Container>
      </SafeAreaView>
    </View>
  );
}
