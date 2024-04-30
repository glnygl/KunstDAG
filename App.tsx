/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import ArtistsView from './src/screens/ArtistsView';
import ArtworksView from './src/screens/ArtworksView';
import ArtworkDetailView from './src/screens/ArtworkDetailView';
import { RootStackParamList }  from './src/types'

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName= 'ArtistsView'
       screenOptions={{
         headerBackTitle: '',
         headerShown: true,
         headerBackTitleVisible: false,
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
        <Stack.Screen name= 'ArtistsView' component={ArtistsView}/>
        <Stack.Screen name= 'ArtworksView' component={ArtworksView}/>
        <Stack.Screen name= 'ArtworkDetailView' component={ArtworkDetailView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
