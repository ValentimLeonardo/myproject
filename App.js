import React from "react";
import { Avatar } from 'react-native-elements';
import { View, Text } from 'react-native';
import { Input} from '@rneui/themed';
import { Button } from '@rneui/themed';

const Login = () => {

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
      <Text>Email</Text>
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='BASIC INPUT'
      />
      <Text>Senha</Text>
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='BASIC INPUT'
      />
    
     <Button containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,}} >Logar</Button>
     <Button containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,}}>Esqueci cadastro</Button>
    </View>
  );
};
const Cadastro= () => {

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 1,
      flexGrow: 1,
    }}
>
      <Text containerStyle={{
          fontSize: 32, 
      }}>CADASTRO</Text>
      <Text>Nome</Text>
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='BASIC INPUT'
      />
      <Text>Email</Text>
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='BASIC INPUT'
      />
      <Text>Senha</Text>
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='BASIC INPUT'
      />
     <Button containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,}}>Cadastro</Button>
    </View>
  );
};
const Recuperar= () => {

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 1,
      flexGrow: 1,
    }}
>
      <Text containerStyle={{
          fontSize: 32, 
      }}>ESQUECI A SENHA</Text>
      <Text>Email</Text>
      <Input containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,}}
        placeholder='BASIC INPUT'
      />
     <Button containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,}}>Enviar</Button>
    </View>
  );
};

export default Recuperar;
//export default login;
//export default Cadastro;
