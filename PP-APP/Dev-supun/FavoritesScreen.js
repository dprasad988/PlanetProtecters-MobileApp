import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View padding={20} style={styles.customCard}>
          <Text>Favorites</Text>
        </View>
        <View padding={20} style={styles.customCard}>
          <Text>Favorites</Text>
        </View>
        <View padding={20} style={styles.customCard}>
          <Text>Favorites</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    flexWrap: 'wrap', 
  },
  customButton: {
    borderRadius: 20,
    padding: 10,
  },
  customCard: {
    borderRadius: 20,
    height: 80,
    width: Dimensions.get('window').width * 0.4, 
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }
});

export default FavoritesScreen;
