import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ICTrip from '../assets/icons/ic_trip.svg';
import ICHotel from '../assets/icons/ic_hotel.svg';
import ICPayment from '../assets/icons/ic_payment.svg';

const Icon = type => {
  if (type === 'trip') {
    return <ICTrip />;
  }
  if (type === 'hotel') {
    return <ICHotel />;
  }
  if (type === 'payment') {
    return <ICPayment />;
  }
};
const Badge = ({badgeType, text, icon, price}) => {
  return badgeType === 'title' ? (
    <View style={styles.container(badgeType)}>
      <View style={styles.imageView}>{Icon(icon)}</View>
      <Text style={styles.text(badgeType)}>{text}</Text>
    </View>
  ) : (
    <View style={styles.container(badgeType)}>
      <Text style={styles.text(badgeType)}>
        {}
        IDR {Number(price)}k <Text style={styles.textSpan}>/Night</Text>
      </Text>
    </View>
  );
};

// const {container} = styles;
const styles = StyleSheet.create({
  container: badgeType => ({
    flexDirection: 'row',
    alignItems: 'center',
    position: badgeType === 'title' ? 'relative' : 'absolute',
    top: 0,
    padding: badgeType === 'title' ? 0 : 12,
    backgroundColor: badgeType === 'title' ? 'transparent' : '#1F1D2B',
    opacity: badgeType === 'title' ? 1 : 0.75,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
  }),
  imageView: {
    backgroundColor: '#353340',
    paddingHorizontal: 13,
    paddingVertical: 15,
    borderRadius: 12,
  },
  text: badgeType => ({
    fontSize: badgeType === 'title' ? 24 : 14,
    marginLeft: badgeType === 'title' ? 16 : 0,
    color: badgeType === 'title' ? 'white' : '#FF7551',
    fontFamily: 'Montserrat-Medium',
  }),
  textSpan: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
});
export default Badge;
