import React, {useEffect, useState} from 'react';
import {
    Button,
    View,
    Text,
    FlatList,
    Linking,
    TouchableOpacity
  } from 'react-native';

import { getSeasonDetails } from 'src/library/api/races' 

const Item = ({ data }) => (
    <View>
        <TouchableOpacity onPress={() => Linking.openURL(data.url)}>
            <Text style={{fontSize:20}}>{data.round}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(data.url)}>
            <Text>Wiki</Text>
        </TouchableOpacity>
        <Text style={{fontSize:20}}>{data.raceName}</Text>
    </View>
  );

export default function SeasonDetailsScreen({ route, navigation }){

  const { year } = route.params;
    const renderItem = ({ item }) => (
        <Item data={item} navigation={navigation} />
      );

    const [racesList, setRacesList] = useState([]);

    useEffect(() => {
      getSeasonDetails(year).then((response) => response.json())
        .then((json) => {
            console.log(json.MRData.RaceTable.Races[0]);
          setRacesList(json.MRData.RaceTable.Races);
        })
        .catch((error) => {
          console.error(error);
        });
    },[]);

    return (
        <View>
          <FlatList
                data={racesList}
                renderItem={renderItem}
                keyExtractor={item => item.round}
            />
        </View>
    );
  };