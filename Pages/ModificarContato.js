import React from "react";
import { View, Text } from 'react-native';
import { Input} from '@rneui/themed';
import { Button } from '@rneui/themed';

function ModificarContato({navigation}){

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 1,
      flexGrow: 1,
    }}
>
      <Text>Nome</Text>
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='Nome'
      />
      <Text>Email</Text>
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='Email'
      />
      <Text>Telefone</Text>
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='Telefone'
      />
     <Button onPress={() => navigation.navigate('Contatos')} containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,}}>alterar</Button>
    <Button onPress={() => navigation.navigate('Contatos')} containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,}}>Excluir</Button>
    </View>
  );
};

export default ModificarContato;