import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Gap from '../components/atomic/Gap';
import Badge from '../components/Badge';
import TripCategories from '../components/TripCategories';
import Button from '../components/Button';
const Trip = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Badge text="Trip" icon="trip" badgeType="title" />
        <Gap height={30} />
        <Text style={styles.title}>Whom You are Planning To Travel With?</Text>
        <Gap height={30} />
        <TripCategories
          title="Solo Trip"
          subtitle="Suitable for you need a calm situation"
          active={false}
        />

        <Gap height={20} />

        <TripCategories
          title="Family Trip"
          subtitle="Suitable for Make Perfect Memory"
          active={true}
        />

        <Gap height={20} />

        <TripCategories
          title="Couples Trip"
          subtitle="Suitable for spending time with loved ones"
          active={false}
        />

        <Gap height={20} />

        <TripCategories
          title="Company Trip"
          subtitle="Suitable for refreshing your office mind"
          active={false}
        />
        <Gap height={70} />
        <Button
          btnType="btn-primary"
          btnText="Continue to hotels"
          btnColor="#6C5ECF"
          onPress={() => navigation.navigate('Hotel')}
        />
        <Gap height={30} />
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
});
export default Trip;
