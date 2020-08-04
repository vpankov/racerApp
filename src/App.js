import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RacesScreen from './screens/Races/RacesContainer';
import RacersScreen from './screens/Racers/RacersContainer';
import RacerDetailsScreen from './screens/RacerDetails/RacerDetailsContainer';
import Loader from './library/components/Loader/LoaderContainer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Racers"
          component={RacersScreen}
          options={{title: 'Racers'}}
        />
        <Stack.Screen
          name="RacerDetails"
          options={{title: ''}}
          component={RacerDetailsScreen}
        />
        <Stack.Screen
          name="Races"
          component={RacesScreen}
          options={{title: 'Races'}}
        />
      </Stack.Navigator>
      <Loader />
    </NavigationContainer>
  );
};

export default App;
