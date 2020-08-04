import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RacersScreen from './screens/Racers/RacersContainer'
import RacerDetailsScreen from './screens/RacerDetails'
import Loader from './library/components/Loader/LoaderContainer'

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
          <Stack.Screen name="RacerDetails" component={RacerDetailsScreen} />
        </Stack.Navigator>
        <Loader/>
      </NavigationContainer>
  );
};

export default App;