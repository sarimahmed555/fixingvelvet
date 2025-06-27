import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ContactAmericaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact America</Text>
      <Text style={styles.subtitle}>This screen is under development</Text>
    </View>
  );
};

export default ContactAmericaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});