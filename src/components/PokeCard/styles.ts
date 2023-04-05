import styled from 'styled-components'

export const Container = styled.View`
    width: 100%;
    height: 100%;
`;
export const PokeItem = styled.View`
    width: 90%;
    height: 100px;
    /* background-color: green; */
    margin: auto;
    border-radius: 10px;
    margin-bottom: 20px;
    flex-direction: row;
    background-color: #EDF6EC;
    `;

export const PokeLeft = styled.View`
    width: 60%;
    height: 100%;
    border-radius: 10px;
    background-color: ${(props: any) => props.color};
    /* justify-items: center; */
    justify-content: center;
    padding-left: 4%;
    padding-top: 2%;
`;
export const Name = styled.Text`
    font-family: Poppins_600SemiBold;
    font-size: 21px;
`;
export const Number = styled.Text`
    font-family: Poppins_600SemiBold;
    font-size: 12px;
`;
export const PokeRight = styled.View`
    width: 40%;
    border-radius: 10px;
    height: 100%;
    background-color: ${(props: any) => props.color};
    align-items: center;
    justify-content: center;
`;
export const PokeType = styled.View`
    width: 70%;
    height: 40%;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
export const TypeImage = styled.Image`
width: 50%;
height: 60%;
    
`;
export const TypeContainer = styled.View`
    width: 57%;
    height:80%;
    background-color: ${(props: any) => props.color};
    margin-right: 15px;
    margin-top: 5px;
    border-radius: 16px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const TypeModal = styled.View`
    border-radius: 10px;
    width: 30%;
    height: 70%;
    background-color: white;
    justify-content: center;
    align-items: center;
    margin-right: 6px;
`;
export const TypeName = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 11;
`;
export const PokeImage = styled.Image`
    width: 70%;
    height: 80%;
    position: absolute;
`;
export const BackgroundImage = styled.Image`
    width: 50px;
    height: 60px;
`;