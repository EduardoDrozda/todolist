import { Text, TouchableOpacity, View } from "react-native";

import { ITask } from "../../interfaces";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

interface Props {
  task: ITask;
  onDelete: (id: number) => void;
}

export function Task({ task, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity style={styles.checkbox} />
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
