import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import ICCheck from '../assets/icons/ic_check.svg';
const TripCategories = ({title, subtitle, active}) => {
  const [actives, setActives] = useState(active);
  return (
    <TouchableHighlight onPress={() => setActives(!actives)}>
      <View style={styles.container(actives)}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.iconWrapper(actives)}>
          {actives === true ? <ICCheck /> : <></>}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: actives => ({
    // borderColor: 'transparent',
    borderWidth: 1,
    borderColor: actives === true ? '#FF7551' : 'transparent',
    backgroundColor: '#252836',
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  iconWrapper: actives => ({
    paddingHorizontal: 7,
    paddingVertical: 9,
    backgroundColor: actives === true ? '#FF7551' : 'transparent',
    borderRadius: 20,
  }),
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: 'white',
  },
  subtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#757686',
    marginTop: 8,
  },
});
export default TripCategories;
