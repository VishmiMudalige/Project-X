import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { human } from 'react-native-typography';
import { PricingCard } from 'react-native-elements';
import { Button, Overlay } from 'react-native-elements';
import ViewCart from "./../../ViewCart";

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'http://www.reliancetrading.net/media/img/1497869897.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'http://www.reliancetrading.net/media/img/1497869585.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'http://www.reliancetrading.net/media/img/1497869615.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'http://www.reliancetrading.net/media/img/1497869492.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'http://www.reliancetrading.net/media/img/1497869449.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState('');


  const toggleOverlay = (ss) => {
    setVisible(!visible);
    setVisible1(ss)
  };


  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />

         <View style={{backgroundColor: '#e0e0e0', marginTop: -5,borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}><Text style={styles.title} numberOfLines={6}>
          <PricingCard
          onButtonPress={() => {toggleOverlay(item.illustration)}}
          containerStyle={{width: screenWidth - 60}}
          pricingStyle={{color:'#000'}}
  color="grey"
  title="Round Iron"
  price="Rs1200"
  info={['Long products include billets, blooms, rebars, wire rod, sections, rails, sheet piles and drawn wire.']}
  button={{ title: 'ADD TO CART', icon: 'rowing' }}
/>

        </Text></View>

      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
        <View style={{margin:10, marginLeft: 15}}>

          <Text style={{ fontFamily: 'Khmer Sangam MN', fontSize: 15, fontWeight: 'normal', color: 'grey' }}>St. Anthony's Hardware</Text>

        </View>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
          <View>


      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <ViewCart />
      </Overlay>
    </View>
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: 500,
    marginLeft: -10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
