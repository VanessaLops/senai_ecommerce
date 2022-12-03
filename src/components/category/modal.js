import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Modal({ modal, setModal }) {
  return (
    <View style={{ height: 580, backgroundColor: "#F3890C", width: 392 }}>
      <TouchableOpacity
        onPress={() => {
          setModal(!modal);
        }}
      >
        <Text
          style={{
            top: 10,
            alignSelf: "flex-end",
            left: 350,
            fontSize: 40,
            position: "absolute",
            color: "white",
          }}
        >
          X
        </Text>
      </TouchableOpacity>

      <View style={{ top: 100, flexDirection: "row" }}>
        <Text style={{ fontSize: 25, color: "white", marginLeft: 10 }}>
          Quantidade: 1
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: "white",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>+</Text>
          </View>
          <Text style={{ fontSize: 30, left: 10 }}>+</Text>

          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: "white",
              borderRadius: 100,
              left: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>+</Text>
          </View>
        </View>
      </View>

      <View style={{ top: 100, flexDirection: "row" }}>
        <Text style={{ fontSize: 18, color: "white", marginLeft: 10 }}>
          Produto:Hamburguer Tradicional
        </Text>
      </View>
      <View style={{ top: 100, flexDirection: "row" }}>
        <Text style={{ fontSize: 18, color: "white", marginLeft: 10 }}>
          Preço: R$ 30.00
        </Text>
      </View>
      <View style={{ top: 100, flexDirection: "row" }}>
        <Text style={{ fontSize: 18, color: "white", marginLeft: 10 }}>
          Total: 30.00
        </Text>
      </View>
      <View style={{ top: 100, flexDirection: "row" }}>
        <Text style={{ fontSize: 18, color: "white", marginLeft: 10 }}>
          Endereço de entrega: Rua Represa de Pirajá
        </Text>
      </View>
      <View style={{ top: 100, flexDirection: "row" }}>
        <Text style={{ fontSize: 18, color: "white", marginLeft: 10 }}>
          Observação
        </Text>
      </View>
      <View
        style={{
          top: 100,
          flexDirection: "row",
          width: 200,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          height: 100,
          borderRadius: 10,
          marginTop: 30,
        }}
      ></View>

      <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 150 }}>
        <View
          style={{
            height: 40,
            width: 100,
            backgroundColor: "white",
            marginTop: 100,
            borderRadius: 10,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 10 }}>Finalizar Compra</Text>
        </View>
        <View
          style={{
            height: 40,
            width: 100,
            backgroundColor: "white",
            marginTop: 100,
            marginLeft: 20,
            borderRadius: 10,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 10 }}>Adicionar + item</Text>
        </View>
      </View>
    </View>
  );
}
