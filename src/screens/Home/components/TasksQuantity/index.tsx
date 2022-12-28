import { Text, View } from "react-native";

import { styles } from "./styles";

interface Props {
  tasksQuantity: number;
  label: string;
  labelColor: string;
}

export function TasksQuantity({ tasksQuantity, label, labelColor }: Props) {
  return (
    <View style={styles.tasksText}>
      <Text
        style={{
          ...styles.tasksTextInfo,
          color: labelColor,
        }}
      >
        {label}
      </Text>
      <View style={styles.tasksTotalNumberContainer}>
        <Text style={styles.tasksTextTotalNumber}>{tasksQuantity}</Text>
      </View>
    </View>
  );
}
