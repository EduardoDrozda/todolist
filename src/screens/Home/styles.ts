import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logoContainer: {
    paddingTop: 30,
    height: 173,
    width: "100%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 24,
  },
  formContainer: {
    marginTop: -30,
    width: "100%",
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 16,
    fontSize: 16,
    lineHeight: 22.4,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    borderColor: "#0D0D0D",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonIcon: {
    color: "#FFF",
    fontSize: 24,
  },
  buttonEnabled: {
    backgroundColor: "#1E6F9F",
  },
  buttonDisabled: {
    backgroundColor: "#808080",
  },
  tasksInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
  },
  tasksListContainer: {
    width: "100%",
    marginTop: 32,
  },
});
