import {Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, View} from 'react-native';
import {
  Container,
  Header,
  InfoCard,
  Main,
  RegionCard,
  PokeCard,
  RegionName,
  RegionGen,
  RegionImage,
  Region,
} from './styles';

export function Regions() {
  const navigation = useNavigation();
  const regions = [
    {
      name: 'Kanto',
      gen: 1,
      background: require('../../assets/regions/background/Kanto.png'),
      pokemons: require('../../assets/regions/pokemons/1gen.png'),
    },
    {
      name: 'Johto',
      gen: 2,
      background: require('../../assets/regions/background/Johto.png'),
      pokemons: require('../../assets/regions/pokemons/2gen.png'),
    },
    {
      name: 'Hoenn',
      gen: 3,
      background: require('../../assets/regions/background/Hoenn.png'),
      pokemons: require('../../assets/regions/pokemons/3gen.png'),
    },
    {
      name: 'Sinnoh',
      gen: 4,
      background: require('../../assets/regions/background/Sinnoh.png'),
      pokemons: require('../../assets/regions/pokemons/4gen.png'),
    },
    {
      name: 'Unova',
      gen: 5,
      background: require('../../assets/regions/background/Unova.png'),
      pokemons: require('../../assets/regions/pokemons/5gen.png'),
    },
    {
      name: 'Alola',
      gen: 6,
      background: require('../../assets/regions/background/Alola.png'),
      pokemons: require('../../assets/regions/pokemons/6gen.png'),
    },
    {
      name: 'Galar',
      gen: 7,
      background: require('../../assets/regions/background/Galar.png'),
      pokemons: require('../../assets/regions/pokemons/7gen.png'),
    },
  ];
  console.log(regions[0].pokemons);
  return (
    <View>
      <Container>
        <Header>
          <Text style={{fontFamily: 'Poppins_600SemiBold', fontSize: 18}}>
            Regiões
          </Text>
        </Header>
        <Main>
          {regions.map(region => (
            <Region activeOpacity={0.9} onPress={() => console.log('aaaa')}>
              <RegionCard source={region.background}>
                <InfoCard>
                  <RegionName>{region.name}</RegionName>
                  <RegionGen>{region.gen}º Geração</RegionGen>
                </InfoCard>
                <PokeCard>
                  <RegionImage source={region.pokemons} />
                </PokeCard>
              </RegionCard>
            </Region>
          ))}
        </Main>
      </Container>
    </View>
  );
}
