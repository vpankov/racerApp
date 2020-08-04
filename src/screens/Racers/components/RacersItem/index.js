import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const RacersItem = ({data, navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('RacerDetails', {id: data.driverId})}>
    <View style={styles.listItem}>
      <View style={{...styles.column}}>
        <Text
          style={
            styles.listItem__name
          }>{`${data.givenName} ${data.familyName}`}</Text>
        <Text style={styles.listItem__nationality}>{data.nationality}</Text>
      </View>
      <View style={{...styles.column, ...styles.column_birthday}}>
        <Text style={styles.listItem__birthdayLabel}>Birthday</Text>
        <Text>{data.dateOfBirth}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default RacersItem;
