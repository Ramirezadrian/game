import React, { useState } from "react";
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Header } from './components'
import colors from './constants/colors';
import { StartGame, Game } from './screens/index';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Italic': require('../assets/fonts/Rubik-Italic.ttf'),
  });

  const [userNumber, setUserNumber] = useState(null);
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGame onStartGame={onStartGame} />
  if(userNumber){
    content = <Game selectedNumber={userNumber} />
  }

  if (!loaded) {
    return(
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
  )}

  return (
    <View style={styles.container}>
      <Header title={userNumber ? "Let's Play" : 'Welcome'}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,

  },
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
