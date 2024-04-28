/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ArtistsView from './src/screens/ArtistsView';

function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName= 'ArtistsView'
       screenOptions={{
         headerBackTitle: '',
         headerShown: true,
         headerShadowVisible: false,
         headerStyle: {
           backgroundColor: 'white',
         },
         headerTintColor: '#202020',
         headerTitle: 'KUNSTDAG',
         headerTitleStyle: {
           fontWeight: 'bold',
         },
       }}>
        <Stack.Screen component={ArtistsView} name= 'ArtistsView'/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
