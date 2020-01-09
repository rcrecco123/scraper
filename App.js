import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Scraper from "./components/scraper";

export default function App() {
  return (
    <View style={styles.container}>
      <Scraper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
