import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RacersScreen from './screens/Racers'
import SeasonDetailsScreen from './screens/SeasonDetails'
import RacerDetailsScreen from './screens/RacerDetails'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Racers"
          component={RacersScreen}
          options={{ title: 'Racers' }}
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