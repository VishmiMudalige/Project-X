import * as React from 'react';
import {Button, View, Text, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

const list = [
  {
    name: 'Date : 2020-01-20',
    avatar_url: 'http://www.reliancetrading.net/media/img/1497869615.jpg',
    subtitle: 'Total: Rs 12000'
  },
  {
    name: 'Date : 2020-01-20',
    avatar_url: 'http://www.reliancetrading.net/media/img/1497869585.jpg',
    subtitle: 'Total: Rs 1100'
  },
  {
    name: 'Date : 2020-01-20',
    avatar_url: 'http://www.reliancetrading.net/media/img/1497869492.jpg',
    subtitle: 'Total: Rs 5000'
  },
  {
    name: 'Date : 2020-01-20',
    avatar_url: 'http://www.reliancetrading.net/media/img/1497869449.jpg',
    subtitle: 'Total: Rs 12000'
  },
  {
    name: 'Date : 2020-01-20',
    avatar_url: 'http://www.reliancetrading.net/media/img/1497869897.jpg',
    subtitle: 'Total: Rs 12000'
  },
  

];




const keyExtractor = (item, index) => index.toString()

const renderItem = ({ item }) => (
  <ListItem bottomDivider>
    <Avatar source={{uri: item.avatar_url}} size={50} />
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
       <ListItem.Subtitle>From : Sumedha stores</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
)

export default function Purchase({navigation}) {
    return (
        <FlatList
      keyExtractor={keyExtractor}
      data={list}
      renderItem={renderItem}
    />
    );
}


