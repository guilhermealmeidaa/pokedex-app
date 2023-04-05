import styled from 'styled-components';
import { Feather } from 'react-native-feather';

export const Container = styled.View`
    width: 95%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
`;
export const Header = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    /* background-color: black; */
`;
export const TrainerIcon = styled.Image`
    margin-left: 8%;
`;
export const ImageContainer = styled.View`
    /* background-color: black; */
    margin-top: 30%;
    margin-bottom: 5%;
`;
export const InputButtom = styled.TouchableHighlight`
    background-color: #173EA5;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    width: 90%;
    height: 7%;
    margin-top: 8%
`;
export const InputLogin = styled.TouchableOpacity`
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 90%;
    height: 8%;
    margin-top: 5%
`;
export const Icon = styled(Feather)`

`;

