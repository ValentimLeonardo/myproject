import React from "react";
import { View, Text } from 'react-native';
import { Input} from '@rneui/themed';
import { Button } from '@rneui/themed';
export default () => {

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 1,
      flexGrow: 1,
    }}
>

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