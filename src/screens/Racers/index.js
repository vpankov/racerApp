import React, {useEffect, useState} from 'react';
import {
    Button,
    View,
    Text,
    FlatList,
    Linking,
    TouchableOpacity
  } from 'react-native';

import styles from './styles'

import { getRacers } from 'src/library/api/races' 

const Item = ({ data, navigation }) => (
    <View style={styles.listItem}>
        <Text style={{...styles.column, ...styles.column_name}}>{`${data.givenName} ${data.familyName}`}</Text>
        <Text style={{...styles.column, ...styles.column_birthday}}>{data.dateOfBirth}</Text>
        <Text style={{...styles.column, ...styles.column_nationality}}>{data.nationality}</Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('SeasonDetails', { year: data.season })}>
            <Text style={{fontSize:20}}>{data.season}</Text>
        </TouchableOpacity> */}
{/* 
        <TouchableOpacity onPress={() => Linking.openURL(data.url)}>
            <Text>Wiki</Text>
        </TouchableOpacity> */}
    </View>
  );

export default function RacersScreen({ navigation }){
    const renderItem = ({ item }) => (
        <Item data={item} navigation={navigation} />
      );

    const [racersList, setRacersList] = useState([]);

    useEffect(() => {
        getRacers().then((response) => response.json())
        .then((json) => {
            console.log(json.MRData.DriverTable.Drivers);
          setRacersList(json.MRData.DriverTable.Drivers);
        })
        .catch((error) => {
          console.error(error);
        });
    },[]);

    return (
        <View>
            <FlatList
                data={racersList}
                renderItem={renderItem}
                style={{paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 20}}
                keyExtractor={item => item.driverId}
            />
            {/* <Button
                title="Go to racer details"
                onPress={() =>
                navigation.navigate('RacerDetails', { name: 'Jane' })
                }
            /> */}
        </View>
    );
  };