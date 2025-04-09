import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from "react-native-elements";
import LoginScreen from "./Pages/LoginScreen.js";
import CadastroUsuario from "./Pages/CadastroUsuario.js";
import ListaContatos from "./Pages/ListaContato.js";
import Contato from "./Pages/Contato.js";
import ModificarContato from "./Pages/ModificarContato.js";


const Stack = createNativeStackNavigator();

function App() {
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Usuario" component={CadastroUsuario}/> 
        <Stack.Screen name="Contato" component={Contato}/>
        <Stack.Screen 
          name="Contatos" 
          component={ListaContatos} 
          options={({ navigation }) => ({
            headerRight: () => (
              <Button
                title="Adicionar"
                onPress={() => navigation.navigate('Contato')} // Navega para a tela de Contato
              />
            ),
          })}
        />
        <Stack.Screen name="Modificar" component={ModificarContato}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

