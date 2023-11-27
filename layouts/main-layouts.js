import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './headers';
import Footer from './footer';

export default function MainLayout({ children }) {
  return (
    <View style={styles.container}>
      <Header title={"My Header"} />
      <ScrollView>
        {children}
      </ScrollView>
      <Footer title={"MyFooter.com"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});