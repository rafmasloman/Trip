import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Gap from './atomic/Gap';
import Button from './Button';

const PaymentSummary = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Summary</Text>

      <Gap height={12} />

      <View style={styles.textWrapper}>
        <Text style={styles.textLeft}>Family Trip</Text>
        <Text style={styles.textRight}>IDR 2.500.000</Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.textLeft}>Hotel</Text>
        <Text style={styles.textRight}>IDR 500.000</Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.textLeft}>Service Fee</Text>
        <Text style={styles.textRight}>IDR 50.000</Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.textTotalLeft}>Total</Text>
        <Text style={styles.textTotalRight}>IDR 550.000</Text>
      </View>

      <Gap height={30} />
      <Button
        btnType="btn-primary"
        btnColor="#35A3AA"
        btnText="Continue to Checkout"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252836',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
    marginHorizontal: -30,
  },
  textWrapper: {
    flexDirection: 'row',
    marginVertical: 6,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: 'white',
  },
  textLeft: {
    fontFamily: 'Montserrat-Light',
    color: '#757686',
    fontSize: 12,
  },
  textRight: {
    fontFamily: 'Montserrat-Regular',
    color: 'white',
    fontSize: 12,
  },
  textTotalLeft: {
    fontFamily: 'Montserrat-Medium',
    color: 'white',
    fontSize: 12,
  },
  textTotalRight: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FF7551',
    fontSize: 12,
  },
});
export default PaymentSummary;
