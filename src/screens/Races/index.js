import React, {useEffect, useState} from 'react';
import {
    View,
    FlatList,
  } from 'react-native';

import styles from './styles'

import config from 'src/config.js'

import RacesItem from './components/RacesItem'

import { getRaces } from 'src/library/api/races' 

export default function RacesScreen({ navigation,  setLoaderVisibility, route}){
    const [racesList, setRacesList] = useState([]);
    const [nextPage, setNextPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const {id} = route.params;
    useEffect(() => {
        loadRaces()
    },[]);

    function loadRaces(){
        
        if(nextPage === null || isLoading) return null;

        setIsLoading(true);
        setLoaderVisibility(true);
        
        getRaces(id, nextPage).then((response) => response.json())
            .then((json) => {
                console.log(json.MRData);

                setRacesList(racesList.concat(json.MRData.RaceTable.Races));

                console.log(json.MRData.total, nextPage * config.PAGINATION_SIZE)
                
                if(json.MRData.total > nextPage * config.PAGINATION_SIZE){
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
                data={racesList}
                renderItem={({ item }) => (
                    <RacesItem data={item} navigation={navigation} />
                  )}
                style={{paddingTop: 20, paddingBottom: 20}}
                keyExtractor={item => item.date}
                onEndReachedThreshold={0.5}
                onEndReached={() => loadRaces()}
            />
        </View>
    );
  };