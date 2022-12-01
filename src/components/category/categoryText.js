import React from "react";
import { Text, View } from "react-native";
import Category from ".";

export default function CategoryText({ title, allTex }) {
  return (
    <>
      <View
        style={{
          height: 60,
          width: "100%",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 2,
            paddingLeft: 40,
            paddingRight: 40,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 18 }}>{title}</Text>
          <Text>{allTex}</Text>
        </View>
      </View>
    </>
  );
}
