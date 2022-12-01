import React, { Component, useState } from "react";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import FlatListSlider from "./FlatListSlider";
export default function Banner01() {
  const [data, setData] = useState([
    {
      image:
      require("../../assets/01.png"),
      desc: "10% de desconto na compra de dois hambúrguer",
    },
    {
      image:
      require("../../assets/02.png"),
      desc: "7% de desconto na compra de duas pizza familia",
      type:'pizza'
    },
    {
      image:
      require("../../assets/03.png"),
      desc: "2% de desconto na compra de uma barca japonesa",
    },
    
  ]);

  return (
    <View style={{ flexDirection: "row" }}>
      <SafeAreaView>
        <ScrollView horizontal>
          {data.map((item) => {
            return (
              <>
                <View
                  style={{
                    width: 143,
                    height: 112,
                    backgroundColor:item.type === 'pizza'? '#557865': "#F3890C",
                    borderRadius: 6,
                    marginLeft: 20,
                    flexDirection: "column",
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 10,
                      marginTop: 5,
                      fontSize: 11,
                      color: "white",
                    }}
                  >
                    {item.desc}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      width: 60,
                      borderRadius: 100,
                      marginTop: 10,
                      left:12,
                    }}
                  >
                    <Text style={{ fontSize: 12, left: 6, color: "#F3890C" }}>
                      Ver mais
                    </Text>
                  </TouchableOpacity>

                  <View style={{ left: 100, bottom:0,zIndex:99999,position:'absolute' }}>
                    <Image source={item.image} />
                  </View>
                </View>
                <View style={{ width: 10 }} />
              </>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  contentStyle: {
    paddingHorizontal: 16,
  },
});
