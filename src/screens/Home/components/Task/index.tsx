import { Text, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { ITask } from "../../interfaces";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

interface Props {
  task: ITask;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export function Task({ task, onDelete, onToggle }: Props) {
  function isTaskDone() {
    return task.done;
  }

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={{
            ...styles.checkbox,
            ...(isTaskDone() ? styles.checked : styles.unchecked),
          }}
          onPress={() => onToggle(task.id)}
        >
          {isTaskDone() && (
            <Text style={styles.checkdIconContainer}>
              <AntDesign name="check" size={15} color="#F2F2F2" />
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {task.id} - {task.title}
        </Text>
      </View>
      <View style={styles.deleteContainer}>
        <TouchableOpacity onPress={() => onDelete(task.id)}>
          <Text>
            <Ionicons name="trash-outline" size={24} color="#808080" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
