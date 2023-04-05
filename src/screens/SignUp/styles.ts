
import styled from 'styled-components';

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
    justify-content: space-between;
    /* background-color: black; */
`;
export const TrainerIcon = styled.Image`
`;
export const ImageContainer = styled.View`
    /* background-color: black; */
    margin-top: 20%;
    margin-bottom: 5%;
`;
export const InputButtom = styled.TouchableHighlight`
    /* background-color: #173EA5; */
    background-color: ${(props: { inputColor: string; }) => props.inputColor || 'black'};
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    width: 90%;
    height: 7%;
    margin-top: 3%;
    border: 0.2px;
    border-color: '#DBDCDD';
`;
export const ButtomContainer = styled.View`
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`;
export const InputText = styled.Text`
    color: ${(props: { textColor: string; }) => props.textColor || '#FFF'};
    font-size: 16;
    font-family: 'Poppins_600SemiBold';
`;
export const LogoIcon = styled.Image`
`;
export const MainForm = styled.View`
    margin-top: 15%;
    display: flex;  
    align-items: center;
    width: 100%;
    height: 25%;
`;
export const FormInput = styled.TextInput`
    margin-top: 5%;
    border-color: #999999;
    border-radius: 4px;
    border: 0.5px;
    width: 95%;
    height: 24%;
    padding-left: 4%;
    margin-bottom: 2%;
`;
export const ContinueContainer = styled.View`
    width: 100%;
    height: 63%;
    align-items: center;
    justify-content: flex-end;
`;
export const ContinueButton = styled.TouchableHighlight`
    background-color: #173EA5;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    width: 95%;
    height: 12%;
    margin-top: 3%;
    border: 0.2px;
    border-color: #DBDCDD;
    /* margin-top: 100%; */
`