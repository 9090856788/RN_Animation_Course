import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

// V C F

const NoLibrary = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setPosition(prev => (prev < 300 ? prev + 5 : 0));
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.box, { marginLeft: position }]} />
    </View>
  );
};

export default NoLibrary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 100,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
  },
});
