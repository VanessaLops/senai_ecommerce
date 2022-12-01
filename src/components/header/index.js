import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Header({ welcone, name, textLocalization }) {
  return (
    <View
      style={{
        height: 60,
        width: "100%",
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "column", marginLeft: 25, marginTop: 40 }}>
        <Text>{welcone}</Text>
        <Text>{name}</Text>
      </View>
      <View style={{ width: "100%" }}>
        <View
          style={{
            height: 30,
            width: 180,
            borderRadius: 8,
            marginLeft: 12,
            borderColor: "black",
            color: "green",
            marginTop: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 200,
              backgroundColor: "transparent",
              height: 40,
              left: 10,
              borderRadius: 4,
              flexDirection: "row",
              alignItems: "center",
              fontSize: 100,
              borderWidth: 1,
              borderColor: "#D9D9D9",
              
            }}
          >
            <Icon
              name="map"
              size={30}
              color="#D9D9D9"
              style={{ marginLeft: 10 }}
            />
            <Text style={{left:8,fontSize:12}}>{textLocalization}</Text>
            <Icon
              name="chevron-down"
              size={18}
              color="#D9D9D9"
              style={{ marginLeft: 14 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
