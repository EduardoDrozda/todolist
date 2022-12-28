import { Text, View } from "react-native";

import { ClipboardSvgComponent } from "../../../../shared/components";
import { styles } from "./styles";

export function EmptyTaskList() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ClipboardSvgComponent />
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.subtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
