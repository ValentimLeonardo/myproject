import React from "react";
import { View, Text } from 'react-native';
import { Input} from '@rneui/themed';
import { Button } from '@rneui/themed';

function CadastroUsuario({navigation}){

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 1,
      flexGrow: 1,
    }}
>
      
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='Nome'
      />
     
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='CPF'
      />

      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='Email'
      />
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='Senha'
      />
     <Button onPress={() => navigation.navigate('Login')} containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,}}>Salvar</Button>
    </View>
  );
};

export default CadastroUsuario;