import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import GorgeousHeader from "react-native-gorgeous-header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GorgeousHeader
        menuImageSource={require("./assets/menu.png")}
        searchImageSource={require("./assets/search.png")}
        profileImageSource={{
          uri:
            "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
