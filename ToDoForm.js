import React from 'react';
import { StyleSheet, View, TextInput, Button, StatusBar } from 'react-native';

export default function ToDoForm({addTask}){
 
  const[taskText, setTaskText] = React.useState('');
  
  return (
    <View style={styles.form}>
      <TextInput 
        style={styles.input} 
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText} 
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
      
      <StatusBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});