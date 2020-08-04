import React, {useEffect, useState} from 'react';
import {View, Text, Button, Linking} from 'react-native';

import Separator from 'src/library/components/Separator';
import {getRacer} from 'src/library/api/races.js';

import styles from './styles';

export default function RacerDetailsScreen({
  route,
  navigation,
  setLoaderVisibility,
}) {
  const {id} = route.params;
  const [racerData, setRacerData] = useState({});

  useEffect(() => {
    setLoaderVisibility(true);

    getRacer(id)
      .then((response) => response.json())
      .then((json) => {
        let driver = json.MRData.DriverTable.Drivers[0];
        setRacerData(driver);
        setLoaderVisibility(false);
        navigation.setOptions({
          title: `${driver.givenName} ${driver.familyName}`,
        });
      })
      .catch((error) => {
        console.error(error);
        setLoaderVisibility(false);
      });
  }, []);
  if (typeof racerData.driverId === 'undefined') return null;
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.label}>Name:</Text>
          <Text
            style={
              styles.text
            }>{`${racerData.givenName} ${racerData.familyName}`}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Driver ID:</Text>
          <Text style={styles.text}>{racerData.driverId}</Text>
        </View>
        {typeof racerData.permanentNumber !== 'undefined' && (
          <View style={styles.group}>
            <Text style={styles.label}>Permanent Number:</Text>
            <Text style={styles.text}>{racerData.permanentNumber}</Text>
          </View>
        )}
        <View style={styles.group}>
          <Text style={styles.label}>Nationality:</Text>
          <Text style={styles.text}>{racerData.nationality}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Birthday:</Text>
          <Text style={styles.text}>{racerData.dateOfBirth}</Text>
        </View>
        <View style={styles.navigation}>
          <Button
            style={styles.button}
            color="#000000"
            title={'Biography'}
            onPress={() => Linking.openURL(racerData.url)}
          />
          <Separator />
          <Button
            style={styles.button}
            title={'Races'}
            onPress={() => navigation.navigate('Races', {id: id})}
          />
        </View>
      </View>
    </View>
  );
}
