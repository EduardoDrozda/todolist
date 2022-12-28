import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    backgroundColor: "#262626",
    borderRadius: 5,
    paddingHorizontal: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 100,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  unchecked: {
    borderColor: "#4EA8DE",
  },
  checked: {
    backgroundColor: "#5E60CE",
    borderColor: "#5E60CE",
  },
  checkdIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 16,
  },
  text: {
    fontSize: 16,
  },
  textUndone: {
    color: "#F2F2F2",
  },
  textDone: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
  deleteContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
