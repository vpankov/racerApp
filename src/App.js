import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SeasonsScreen from './screens/Seasons'
import SeasonDetailsScreen from './screens/SeasonDetails'
import RacerDetailsScreen from './screens/RacerDetails'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Seasons"
          component={SeasonsScreen}
          options={{ title: 'Seasons' }}
        />
        <Stack.Screen
          name="SeasonDetails"
          component={SeasonDetailsScreen}
        />
        <Stack.Screen name="RacerDetails" component={RacerDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;