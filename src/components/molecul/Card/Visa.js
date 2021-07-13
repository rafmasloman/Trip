import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ICVisa from '../../../assets/icons/ic_visa.svg';
import VisaText from '../../../assets/icons/ic_visa_text.svg';
const Visa = ({visaType}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          visaType === 'visa-primary' ? '#414954' : '#656DD7',
          visaType === 'visa-primary' ? '#29323C' : '#7F74EB',
        ]}
        style={styles.linearGradient}>
        {/* <Text style={styles.buttonText}>Sign in with Facebook</Text> */}
        <View style={styles.tag}>
          <ICVisa />
          <VisaText />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.number}>4726 1859 1857 ****</Text>
            <Text style={styles.name}>Bimo Semesta</Text>
          </View>
          <View style={styles.circle1}></View>
          <View style={styles.circle2}></View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
  },
  linearGradient: {
    position: 'relative',
    borderRadius: 12,
    width: null,
    height: 200,
    padding: 20,
  },
  content: {
    marginTop: 90,
    position: 'relative',
  },
  tag: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  number: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 14,
  },
  name: {
    fontFamily: 'Poppins-Light',
    color: '#898E94',
    fontSize: 12,
  },
  circle1: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: '#FF7676',
    position: 'absolute',
    right: 12,
    top: 10,
  },
  circle2: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: '#FFBC7B',
    position: 'absolute',
    right: 0,
    top: 10,
  },
});
export default Visa;
