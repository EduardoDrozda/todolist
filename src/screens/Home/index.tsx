import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useCallback, useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { EmptyTaskList } from "./components/EmptyTaskList";
import { ITask } from "./interfaces";
import { LogoSvgComponent } from "../../shared/components";
import { Task } from "./components/Task";
import { TasksQuantity } from "./components/TasksQuantity";
import { styles } from "./styles";

export function Home() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  function isButtonDisabled() {
    return !task.length;
  }

  function handleTask(task: string) {
    setTask(task);
  }

  const handleAddTask = useCallback(() => {
    if (!task.length) return;

    const newTask = {
      id: tasks.length + 1,
      title: task,
      done: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
    handleTask("");
  }, [task, tasks]);

  function handleToggleTask(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  const getTasksDone = useCallback(() => {
    return tasks.filter((task) => task.done).length;
  }, [tasks]);

  const getTasksTotal = useCallback(() => {
    return tasks.length;
  }, [tasks]);

  function handleDeleteTask(id: number) {
    const [findedTask] = tasks.filter((task) => task.id === id);

    Alert.alert("Remover Tarefa", `Deseja remover ${findedTask.id} da lista?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => removeTask(findedTask.id),
      },
    ]);
  }

  function removeTask(taskId: number) {
    const newTasks = tasks.filter(({ id }) => id !== taskId);

    setTasks(newTasks);

    Alert.alert("Tarefa removida", "Tarefa removida com sucesso.");
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoSvgComponent />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={(text) => handleTask(text)}
            value={task}
          ></TextInput>
          <TouchableOpacity
            style={{
              ...styles.button,
              ...(isButtonDisabled()
                ? styles.buttonDisabled
                : styles.buttonEnabled),
            }}
            onPress={handleAddTask}
            disabled={isButtonDisabled()}
          >
            <Text style={styles.buttonIcon}>
              <AntDesign name="pluscircleo" size={16} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tasksInfoContainer}>
          <TasksQuantity
            label="Criadas"
            tasksQuantity={getTasksTotal()}
            labelColor="#4EA8DE"
          />

          <TasksQuantity
            label="Concluidas"
            tasksQuantity={getTasksDone()}
            labelColor="#8284FA"
          />
        </View>
        <View style={styles.tasksListContainer}>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.title}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Task
                task={item}
                onDelete={handleDeleteTask}
                onToggle={handleToggleTask}
              />
            )}
            ListEmptyComponent={<EmptyTaskList />}
          />
        </View>
      </View>
    </View>
  );
}
