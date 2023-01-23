import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from './firebase';

function HomeScreen( ) {
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default HomeScreen;
