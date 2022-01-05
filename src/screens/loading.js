// Dependencies
import React, { useEffect } from 'react'
import * as Font from 'expo-font'
import { FontAwesome } from '@expo/vector-icons'
import { _retrieveData } from "../utils";
import { getProfile } from "../lib/apis";

// Initialize app
const init = async ({ navigation }) => {
  // Load fonts
  await Font.loadAsync({
    'circe-bold': require('../assets/fonts/circe-bold.ttf'),
    'circe-extra-bold': require('../assets/fonts/circe-extra-bold.ttf'),
    'circe-regular': require('../assets/fonts/circe-regular.ttf'),
    ...FontAwesome.font
  });

  const authToken = await _retrieveData('authToken');
  const isLoggedIn = !!authToken;

  // Do "authentication" and navigate to correct screen
  if (!isLoggedIn) {
    navigation.navigate('SignIn');
  } else {
    navigation.navigate('Main');
    await getProfile(authToken, '', navigation);
  }
};

// Initial "loading" screen
export default (props) => {
  // Initialize app
  useEffect(() => { init(props) }, []);

  // Return nothing
  return null
}
