import React, {useEffect, useState} from 'react';
import {
    Button,
    View,
    Text,
    FlatList,
    Linking,
    TouchableOpacity
  } from 'react-native';

import { getSeasons } from 'src/library/api/races' 

const Item = ({ data, navigation }) => (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('SeasonDetails', { year: data.season })}>
            <Text style={{fontSize:20}}>{data.season}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(data.url)}>
            <Text>Wiki</Text>
        </TouchableOpacity>
    </View>
  );

export default function SeasonsScreen({ navigation }){
    const renderItem = ({ item }) => (
        <Item data={item} navigation={navigation} />
      );

    const [seasonsList, setSeasonsList] = useState([]);

    useEffect(() => {
        getSeasons().then((response) => response.json())
        .then((json) => {
            console.log(json.MRData.SeasonTable.Seasons);
          setSeasonsList(json.MRData.SeasonTable.Seasons);
        })
        .catch((error) => {
          console.error(error);
        });
    },[]);

    return (
        <View>
            <FlatList
                data={seasonsList}
                renderItem={renderItem}
                keyExtractor={item => item.season}
            />

            <Button
                title="Go to racer details"
                onPress={() =>
                navigation.navigate('RacerDetails', { name: 'Jane' })
                }
            />
        </View>
    );
  };