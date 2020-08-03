import * as React from 'react';
import {
    Button,
    View,
    Text
  } from 'react-native';

export default function HomeScreen({ navigation }){
    return (
        <View>
            <Button
                title="Go to racer details"
                onPress={() =>
                navigation.navigate('RacerDetails', { name: 'Jane' })
                }
            />
        </View>
    );
  };