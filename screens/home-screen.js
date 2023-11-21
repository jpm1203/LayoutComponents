import React, {useState} from "react";
import MainLayout from "../layouts/main-layouts";
import { Button, StyleSheet } from "react-native";
import ToDoForm from "../components/todo-form";
import ToDoList from "../components/todo-list";

export default function HomeScreen ({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
    ]);
    
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };
    
    return (
        <MainLayout>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} />
        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
        </MainLayout>);
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
        },
      });