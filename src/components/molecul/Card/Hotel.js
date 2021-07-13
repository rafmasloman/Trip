import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import Badge from '../../Badge';
import Star from '../../atomic/Star';
import ICLocation from '../../../assets/icons/ic_location.svg';

const Stars = rating => {
  const stars = [];
  if (rating > 5) rating = 5;

  if (rating < 0) rating = 0;

  for (let i = 0; i < rating; i++) {
    stars.push(<Star active={true} />);
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<Star />);
  }
  return stars;
};

const Hotel = ({name, location, image, price, rating}) => {
  return (
    <TouchableHighlight onPress={() => alert(name)}>
      <View style={style.container}>
        <Image source={image} style={style.image} />
        <Badge badgeType="hotel" price={price} />
        <View style={style.content}>
          <View>
            <Text style={style.name}>{name}</Text>
            <View style={style.locationWrapper}>
              <ICLocation />
              <Text style={style.location}>{location}</Text>
            </View>
          </View>
          <View style={style.stars}>{Stars(rating)}</View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    height: 160,
    width: null,
    borderRadius: 12,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  name: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: 'white',
  },
  location: {
    fontFamily: 'Montserrat-Light',
    color: '#757686',
    marginLeft: 4,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  stars: {
    flexDirection: 'row',
  },
});
export default Hotel;
