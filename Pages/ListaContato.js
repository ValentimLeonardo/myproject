import React from "react";
import { Avatar } from 'react-native-elements';
import { View } from 'react-native';
import { Input} from '@rneui/themed';
import { Button } from '@rneui/themed'
import { ListItem } from '@rneui/themed';

function ListaContatos({navigation}){
    return(
        <View style={{
            display :'flex',
        }}>
        <>
  <ListItem bottomDivider onPress={() => navigation.navigate('Modificar')}>
    <Avatar
      rounded
      source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
    />
    <ListItem.Content >
      <ListItem.Title>Luana</ListItem.Title>
      <ListItem.Subtitle>81 99232-4567</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
  <ListItem bottomDivider onPress={() => navigation.navigate('Modificar')}>
    <Avatar
      rounded
      icon={{
        name: "person-outline",
        type: "material",
        size: 26,
      }}
      containerStyle={{ backgroundColor: "#c2c2c2" }}
    />
    <ListItem.Content>
      <ListItem.Title>Alisson</ListItem.Title>
      <ListItem.Subtitle>81 98432-7543</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
  <ListItem onPress={() => navigation.navigate('Modificar')}>
    <Avatar rounded title="A" containerStyle={{ backgroundColor: "grey" }} />
    <ListItem.Content>
      <ListItem.Title>Lilian</ListItem.Title>
      <ListItem.Subtitle>81 98832-1025</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
</>
        </View>
    )
}

export default ListaContatos;