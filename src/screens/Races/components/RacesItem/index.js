import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';

import styles from './styles';

const RacesItem = ({data}) => (
  <TouchableOpacity
    onPress={() => Linking.openURL(data.url)}>
    <View style={styles.listItem}>
      <View style={{...styles.column}}>
        <Text style={styles.listItem__name}>{data.raceName}</Text>
      </View>
      <View style={{...styles.column, ...styles.column_date}}>
        <Text style={styles.listItem__dateLabel}>Date</Text>
        <Text>{data.date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default RacesItem;
