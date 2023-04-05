import {useEffect} from 'react';
import {Image, Text} from 'react-native';
import Reactotron from 'reactotron-react-native';

import {
  BackgroundImage,
  Name,
  Number,
  PokeImage,
  PokeItem,
  PokeLeft,
  PokeRight,
  PokeType,
  TypeContainer,
  TypeImage,
  TypeModal,
  TypeName,
} from './styles';

export function PokeCard(pokemon: any) {
  const pokeData = pokemon.pokemon.data;

  const pokeTypes = [
    {
      type: 'grass',
      color: '#63BC5A',
      background: '#EDF6EC',
      icon: require('../../assets/types/grass.png'),
      iconBackground: require('../../assets/types/background/grass.png'),
    },
    {
      type: 'fire',
      background: '#FCF3EB',
      color: '#FF9D55',
      icon: require('../../assets/types/fire.png'),
      iconBackground: require('../../assets/types/background/fire.png'),
    },
    {
      type: 'water',
      background: '#EBF1F8',
      color: '#5090D6',
      icon: require('../../assets/types/water.png'),
      iconBackground: require('../../assets/types/background/water.png'),
    },
    {
      type: 'bug',
      background: '#F1F6E8',
      color: '#91C12F',
      icon: require('../../assets/types/bug.png'),
      iconBackground: require('../../assets/types/background/bug.png'),
    },
    {
      type: 'eletric',
      background: '#FBF8E9',
      color: '#F4D23C',
      icon: require('../../assets/types/eletric.png'),
      iconBackground: require('../../assets/types/background/eletric.png'),
    },
    {
      type: 'fairy',
      background: '#FBF1FA',
      color: '#EC8FE6',
      icon: require('../../assets/types/fairy.png'),
      iconBackground: require('../../assets/types/background/fairy.png'),
    },
    {
      type: 'ground',
      background: '#F9EFEA',
      color: '#D97845',
      icon: require('../../assets/types/ground.png'),
      iconBackground: require('../../assets/types/background/ground.png'),
    },
    {
      type: 'rock',
      background: '#F7F5F1',
      color: '#C5B78C',
      icon: require('../../assets/types/rock.png'),
      iconBackground: require('../../assets/types/background/rock.png'),
    },
    {
      type: 'normal',
      background: '#F1F2F3',
      color: '#919AA2',
      icon: require('../../assets/types/normal.png'),
      iconBackground: require('../../assets/types/background/normal.png'),
    },
    {
      type: 'poison',
      background: '#F5EDF8',
      color: '#B567CE',
      icon: require('../../assets/types/poison.png'),
      iconBackground: require('../../assets/types/background/poison.png'),
    },
    {
      type: 'psychic',
      background: '#FCEEEF',
      color: '#FA7179',
      icon: require('../../assets/types/psychic.png'),
      iconBackground: require('../../assets/types/background/psychic.png'),
    },
    {
      type: 'steel',
      background: '#ECF1F3',
      color: '#5A8EA2',
      icon: require('../../assets/types/steel.png'),
      iconBackground: require('../../assets/types/background/steel.png'),
    },
    {
      type: 'dragon',
      background: '#E4EEF6',
      color: '#0B6DC3',
      icon: require('../../assets/types/dragon.png'),
      iconBackground: require('../../assets/types/background/dragon.png'),
    },
    {
      type: 'fighting',
      background: '#F8E9EE',
      color: '#CE416B',
      icon: require('../../assets/types/fighting.png'),
      iconBackground: require('../../assets/types/background/fighting.png'),
    },
    {
      type: 'dark',
      background: '#ECEBED',
      color: '#5A5465',
      icon: require('../../assets/types/dark.png'),
      iconBackground: require('../../assets/types/background/dark.png'),
    },
    {
      type: 'ghost',
      background: '#EBEDF4',
      color: '#5269AD',
      icon: require('../../assets/types/ghost.png'),
      iconBackground: require('../../assets/types/background/ghost.png'),
    },
    {
      type: 'ice',
      background: '#F1FBF9',
      color: '#73CEC0',
      icon: require('../../assets/types/ice.png'),
      iconBackground: require('../../assets/types/background/ice.png'),
    },
    {
      type: 'flying',
      background: '#F1F4FA',
      color: '#89AAE3',
      icon: require('../../assets/types/flying.png'),
      iconBackground: require('../../assets/types/background/flying.png'),
    },
  ];

  const pokeNameFormatter = () => {
    const pokeInfoName = pokeData.name;
    return pokeInfoName[0].toUpperCase() + pokeInfoName.substring(1);
  };
  const pokeTypeFormatter = (typeName: string) => {
    const pokeTypeName = typeName;
    return pokeTypeName[0].toUpperCase() + pokeTypeName.substring(1);
  };

  const pokeStyle = pokeTypes.filter(
    type => type.type === pokeData.types[0].type.name,
  );
  // Reactotron.log(pokeStyle);
  const typeImage = (typeName: any) => {
    const typee = pokeTypes.filter(test => test.type === typeName);
    return typee?.[0]?.icon;
  };
  return (
    <PokeItem>
      <PokeLeft color={pokeStyle[0]?.background}>
        <Number>Nº {pokeData.order}</Number>
        <Name>{pokeNameFormatter()}</Name>
        <PokeType>
          {pokeData.types.map(type =>
            pokeTypes.map(test =>
              test.type === type.type.name ? (
                <TypeContainer color={test.color}>
                  <TypeModal>
                    <TypeImage source={test.icon} />
                  </TypeModal>
                  <TypeName>{pokeTypeFormatter(type.type.name)}</TypeName>
                </TypeContainer>
              ) : null,
            ),
          )}
        </PokeType>
      </PokeLeft>
      <PokeRight color={pokeStyle[0]?.color}>
        <BackgroundImage source={pokeStyle?.[0]?.iconBackground} />
        <PokeImage
          source={{
            uri: pokeData.sprites.front_default,
          }}
        />
      </PokeRight>
    </PokeItem>
  );
}
