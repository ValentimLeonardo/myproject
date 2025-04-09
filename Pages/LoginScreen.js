import React from "react";
import { Avatar } from 'react-native-elements';
import { View } from 'react-native';
import { Input} from '@rneui/themed';
import { Button } from '@rneui/themed';

function LoginScreen({navigation}) {

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 1,
      flexGrow: 1,
    }}
>
      <Avatar
        size="large"
        rounded
        source={{ uri: 'C:\Users\Aluno\Desktop\Nova pasta\myproject\imagem\download.jfif' }}
      />
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='Login'
      />
      
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='Senha'
      />
    
     <Button onPress={() => navigation.navigate('Contatos')} containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}} >Login</Button>
     <Button  onPress={() => navigation.navigate('Usuario')} containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}>Cadastre-se</Button>
    </View>
  );
};

export default LoginScreen;