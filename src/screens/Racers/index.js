import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import config from 'src/config.js';

import RacersItem from './components/RacersItem';

import {getRacers} from 'src/library/api/races';

export default function RacersScreen({navigation, setLoaderVisibility}) {
  const [racersList, setRacersList] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadRacers();
  }, []);

  function loadRacers() {
    if (nextPage === null || isLoading) return null;

    setIsLoading(true);
    setLoaderVisibility(true);

    getRacers(nextPage)
      .then((response) => response.json())
      .then((json) => {
        setRacersList(racersList.concat(json.MRData.DriverTable.Drivers));

        if (json.MRData.total > nextPage * config.PAGINATION_SIZE) {
          setNextPage(nextPage + 1);
        } else {
          setNextPage(null);
        }
        setIsLoading(false);
        setLoaderVisibility(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setLoaderVisibility(false);
      });
  }

  return (
    <View>
      <FlatList
        data={racersList}
        renderItem={({item}) => (
          <RacersItem data={item} navigation={navigation} />
        )}
        style={{paddingTop: 20, paddingBottom: 20}}
        keyExtractor={(item) => item.driverId}
        onEndReachedThreshold={0.5}
        onEndReached={() => loadRacers()}
      />
    </View>
  );
}
