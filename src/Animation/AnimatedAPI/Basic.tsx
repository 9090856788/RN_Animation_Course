import { Animated, StyleSheet, View } from 'react-native';
import React, { FC, useEffect, useRef } from 'react';

// V C F

const Basic: FC = () => {
  const position = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(position, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(position, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    });
  };

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { marginLeft: position }]} />
    </View>
  );
};

export default Basic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 100,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'pink',
  },
});
