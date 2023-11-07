import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((task, index) => (
          <View key={index} style={[styles.task, task.completed ? styles.completed : null]}>
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});
