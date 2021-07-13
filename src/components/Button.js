import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ICNext from '../assets/icons/ic_next.svg';
const Button = ({btnType, btnText, btnColor, onPress, btnIcon}) => {
  return btnType === 'btn-primary' ? (
    <View style={styles.container(btnColor)}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.content}>
          <Text style={styles.text}>{btnText}</Text>
          <ICNext />
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.contentIcon}>
        <View style={styles.iconWrapper}>{btnIcon}</View>
        <Text style={styles.addCardText}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: btnColor => ({
    backgroundColor: btnColor,
    borderRadius: 12,
  }),
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
  contentIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: 'white',
  },
  iconWrapper: {
    maxWidth: 30,
    maxHeight: 30,
    borderRadius: 4,
    backgroundColor: '#FF7551',
    padding: 9,
  },
  addCardText: {
    marginLeft: 12,
    fontFamily: 'Montserrat-Light',
    color: '#757686',
  },
});

export default Button;
