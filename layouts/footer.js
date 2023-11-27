import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default function Footer({ title }) {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  footerText: {
    fontSize: 12,
  },
});