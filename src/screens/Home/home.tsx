import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Container, Header, Input, Main, Search} from './styles';
import * as Icon from 'react-native-feather';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Reactotron from 'reactotron-react-native';
import {PokeCard} from '../../components/PokeCard/pokecard';

export default function Home() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints: any[] = [];
    for (var i = 1; i < 10; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(res => setPokemons(res));
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <SafeAreaView>
        <Container>
          <Header>
            <Search>
              <Icon.Search stroke="#666666" />
              <Input placeholder="Procurar Pokémon" />
            </Search>
          </Header>
          <Main>
            {pokemons.map((pokemon, key) => (
              <PokeCard pokemon={pokemon} />
            ))}
          </Main>
        </Container>
      </SafeAreaView>
    </View>
  );
}
