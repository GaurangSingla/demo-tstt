import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Loader = ({animating, setLoaderVisible}) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator animating={animating} size="large" />
    </View>
  );
};
export default Loader;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'transparent',
    marginTop: '65%',
    marginLeft: '35%',

    zIndex: 5,
    position: 'absolute',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
