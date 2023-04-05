import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
`;
export const Header = styled.View`
  width: 90%;
  height: 5%;
`;
export const Main = styled.ScrollView`
  width: 90%;
  height: 100%;
  margin-top: 5%;
  /* background-color: green; */
`;
export const Region = styled.TouchableOpacity`
  width: 100%;
  /* height: 100%; */
`;
export const RegionCard = styled.ImageBackground`
  width: 100%;
  height: 105px;
  /* background-color: black; */
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const InfoCard = styled.View`
  width: 40%;
  height: 100%;
  /* background-color: red; */
  /* align-items: center; */
  justify-content: center;
  padding-left: 5%;
`;
export const PokeCard = styled.View`
  width: 60%;
  height: 100%;
  /* background-color: blue; */
  justify-content: center;
  align-items: center;
`;
export const RegionName = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 18px;
  color: #fff;
`;
export const RegionGen = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: 13px;
  color: #ccc;
`;
export const RegionImage = styled.Image`
  width: 90%;
  height: 50px;
`;
