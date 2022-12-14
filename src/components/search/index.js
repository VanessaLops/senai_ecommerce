import React from "react";
import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Banner from "../banner";

export default function SearchInput({ title }) {
  return (
    <>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View
          style={{
            width: 280,
            backgroundColor: "transparent",
            height: 25,
            left: 0,
            borderRadius: 4,
            flexDirection: "row",
            alignItems: "center",
            fontSize: 100,
            borderWidth: 1,
            borderColor: "#D9D9D9",
            marginTop: 40,
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <Icon
            name="search"
            size={16}
            color="#D9D9D9"
            style={{ marginLeft: 10 }}
          />
          <TextInput placeholder={title} style={{ left: 5 }}></TextInput>
          <View
            style={{
              height: 25,
              width: 30,
              borderWidth: 1,
              borderColor: "#D9D9D9",
              left: 80,
            }}
          >
            <Icon
              name="bars"
              size={20}
              color="#F3890C"
              style={{ marginLeft: 10, right: 5, top: 1 }}
            />
          </View>
        </View>
      </View>
    </>
  );
}
