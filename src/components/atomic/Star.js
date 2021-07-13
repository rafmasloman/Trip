import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ICStar from '../../assets/icons/ic_star.svg';
import ICStarActive from '../../assets/icons/ic_star_active.svg';
const Icon = active => {
  if (active === true) {
    return <ICStarActive />;
  } else {
    return <ICStar />;
  }
};
const Star = ({active}) => {
  return <View style={styles.container}>{Icon(active)}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 1,
  },
});
export default Star;
