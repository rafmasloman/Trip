import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Badge from '../components/Badge';
import Gap from '../components/atomic/Gap';
import HotelCard from '../components/molecul/Card/Hotel';
import Hotel1 from '../assets/images/building1.png';
import Hotel2 from '../assets/images/building2.png';
import Button from '../components/Button';
const Hotel = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Badge text="Hotel" icon="hotel" badgeType="title" />
        <Gap height={30} />
        <Text style={styles.title}>Select the hotel you want to stay in</Text>
        <Gap height={30} />
        <HotelCard
          name="Standout Hotel"
          location="Jakarta, Indonesia"
          price="500"
          image={Hotel1}
          rating={5}
        />
        <Gap height={30} />
        <HotelCard
          name="Twins Hotel"
          location="Bandung, Indonesia"
          price="350"
          image={Hotel2}
          rating={4}
        />
        <Gap height={40} />
        <Button
          btnType="btn-primary"
          btnText="Continue to Payment"
          btnColor="#6C5ECF"
          onPress={() => navigation.navigate('Payment')}
        />
        <Gap height={30} />
        <Button
          btnType="btn-primary"
          btnText="Back"
          btnColor="blue"
          onPress={() => navigation.goBack()}
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

export default Hotel;
