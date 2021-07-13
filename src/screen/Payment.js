import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import Gap from '../components/atomic/Gap';
import Badge from '../components/Badge';
import Visa from '../components/molecul/Card/Visa';
import ICAdd from '../assets/icons/ic_add.svg';
import ButtonIcon from '../components/Button';
import PaymentSummary from '../components/PaymentSummary';
const Payment = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Badge text="Payment" badgeType="title" icon="payment" />
        <Gap height={30} />
        <Text style={styles.title}>Choose the card you want to use </Text>
        <Gap height={30} />

        <View>
          <ScrollView horizontal={true} style={styles.scroll}>
            <Visa visaType="visa-primary" />
            <Gap width={30} />
            <Visa visaType="visa-secondary" />
            <Gap width={60} />
          </ScrollView>
        </View>

        <Gap height={30} />

        <ButtonIcon
          btnType="btn-icon"
          btnText="Add Another Card"
          btnIcon={<ICAdd />}
          onPress={() => alert('Tambah visa')}
        />

        <Gap height={80} />
        <PaymentSummary navigation={navigation} />
        {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1D2B',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 24,
    color: 'white',
    maxWidth: 310,
  },
  scroll: {
    position: 'relative',
    flexDirection: 'row',
    marginHorizontal: -30,
    paddingLeft: 30,
  },

  // addCard: {
  //   flexDirection: 'row',
  //   backgroundColor: 'yellow',
  //   alignItems: 'center',
  // },
});

export default Payment;
