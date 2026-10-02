import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import NoLibrary from './src/Animation/AnimatedAPI/NoLibrary';
import Basic from './src/Animation/AnimatedAPI/Basic';

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      {/* <NoLibrary /> */}
      <Basic />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
});
