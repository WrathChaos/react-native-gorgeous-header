import React from "react";
import { StatusBar } from "react-native";
import GorgeousHeader from "react-native-gorgeous-header";
import { SafeAreaView } from "react-native-safe-area-context";
// ? Assets
const menuImage = require("./assets/menu.png");
const searchImage = require("./assets/search.png");
const profileImageUri =
  "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <GorgeousHeader
          menuImageSource={menuImage}
          searchImageSource={searchImage}
          profileImageSource={{
            uri: profileImageUri,
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
