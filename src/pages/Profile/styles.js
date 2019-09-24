import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const Container = styled.View`
    margin-top: ${StatusBar.currentHeight};
    flex: 1;
    padding: 10px;  
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;

`;

export const InfoPerfil = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Name = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #ddd
`;

export const Login = styled.Text`
   font-size: 13px;
   color: #ddd;
`;
