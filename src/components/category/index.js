import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { products } from "./products.json";
export default function Category({ modal }) {
  const [array, setArray] = useState([
    {
      id: 1,
      title: "Hamburguer",
    },
    {
      id: 2,
      title: "Pizza",
    },
    {
      id: 3,
      title: "Japonesa",
    },
    {
      id: 4,
      title: "Sobremesa",
    },
  ]);

  return (
    <View style={{ flexDirection: "row" }}>
      <SafeAreaView>
        <ScrollView horizontal>
          {array.map((item) => {
            return (
              <TouchableOpacity
              
              >
                <View
                  style={{
                    height: 28,
                    width: 95,
                    backgroundColor: "#F3890C",
                    borderRadius: 12,
                    marginLeft: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
