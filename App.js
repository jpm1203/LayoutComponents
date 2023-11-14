import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import React, { useState } from 'react';

export default function App() {

  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (text) => {
    setTasks([...tasks, text]);
 
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
};