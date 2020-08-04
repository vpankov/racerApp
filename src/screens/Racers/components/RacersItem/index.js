import React from 'react';
import {
    View,
    Text,
  } from 'react-native';

import styles from './styles'

const RacersItem = ({ data, navigation }) => (
    <View style={styles.listItem}>
        <View style={{...styles.column}}>
            <Text style={styles.listItem__name}>{`${data.givenName} ${data.familyName}`}</Text>
            <Text style={styles.listItem__nationality}>{data.nationality}</Text>
        </View>
        <View  style={{...styles.column, ...styles.column_birthday}}>
            <Text style={styles.listItem__birthdayLabel}>Birthday</Text>
            <Text>{data.dateOfBirth}</Text>
        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('SeasonDetails', { year: data.season })}>
            <Text style={{fontSize:20}}>{data.season}</Text>
        </TouchableOpacity> */}
{/* 
        <TouchableOpacity onPress={() => Linking.openURL(data.url)}>
            <Text>Wiki</Text>
        </TouchableOpacity> */}
    </View>
  );

  export default RacersItem