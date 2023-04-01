import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { AuthProvider } from "./src/context/AuthContext";
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator></Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
