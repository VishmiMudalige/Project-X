import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const data = [
{
  id: "1",
  image: "http://www.reliancetrading.net/media/img/1497869897.jpg",
  name: 'Steel long',
  price: 1200,
  amountTaken: 13
}, {
  id: "2",
  image: "http://www.reliancetrading.net/media/img/1497869449.jpg",
  name: 'SCAFFOLDING',
  price: 1500,
  amountTaken: 4
}, {
  id: "3",
  image:  "http://www.reliancetrading.net/media/img/1497869492.jpg",
  name: 'STEEL FLAT',
  price: 1600,
  amountTaken: 2
}, {
  id: "4",
  image:  "http://www.reliancetrading.net/media/img/1497869585.jpg",
  name: 'STAINLESS STEEL',
  price: 3000,
  amountTaken: 3
}, {
  id: "5",
  image:  "http://www.reliancetrading.net/media/img/1497869615.jpg",
  name: 'TUBES & PIPES',
  price: 2000,
  amountTaken: 1
},  
];

class Item extends Component {
  _renderItem({ item, index }) {
    const { 
      containerStyle, 
      lastItemStyle,
      imageStyle, 
      textStyle, 
      counterStyle,
      priceStyle } = styles;
    
    const image = item.image;
    return (
    <View style={(index + 1 === data.length) ? lastItemStyle : containerStyle}>
     <Image
        style={styles.tinyLogo}
        source={{
          uri: image.toString(),
        }}
      />
      
      <View style={textStyle}>
        <Text style={{ color: '#2e2f30' }}>{item.name}</Text>
        <View style={priceStyle}>
          <Text style={{ color: '#2e2f30', fontSize: 12 }}>Rs{item.price}</Text>
        </View>
      </View>

      <View style={counterStyle}>
        <Icon.Button 
          name="ios-remove" 
          size={25} 
          color='#fff' 
          backgroundColor='#fff' 
          style={{  backgroundColor: '#ef5350', height: 30, width: 30 }} 
          iconStyle={{ marginRight: 0, textAlign: 'center' }}
        />

        <Text>{item.amountTaken}</Text>

        <Icon.Button 
          name="ios-add" 
          size={25} 
          color='#fff' 
          backgroundColor='#fff' 
          style={{  backgroundColor: '#757575', height: 30, width: 30 }} 
          iconStyle={{ marginRight: 0, textAlign: 'center' }}
        />

      </View>
    </View>);
  }


  render() {
    return (
      <FlatList
        data={data}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  imageStyle: {
    width: 50, 
    height: 50, 
    marginRight: 20
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  priceStyle: {
    backgroundColor: '#ddd',
    width: 40,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    marginRight: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
};

export default Item;
