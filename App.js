import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Banner from "./src/components/banner";
import Banner01 from "./src/components/banner/banner";
import Category from "./src/components/category";
import CategoryText from "./src/components/category/categoryText";
import Modal from "./src/components/category/modal";
import Header from "./src/components/header";
import SearchInput from "./src/components/search";

export default function App() {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      text: "Hamburguer Tradicional",
      grama: "200g de chedder + baicon",
      price: "18,00",
      uri: require("./src/assets/hambu.png"),
      nota: "3.5",
      off: "10% OFF",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      text: "CheddarBig   Tradicional",
      grama: "200g de chedder + baicon",
      price: "12,00",
      uri: require("./src/assets/cheddar.png"),
      nota: "4.5",
      off: "5% OFF",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      text: "Hamburguer Tradicional",
      grama: "100g de chedder + baicon",
      price: "30,00",
      uri: require("./src/assets/cheddar.png"),
      nota: "3.3",
      off: "5% OFF",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      text: "Burguer da Neu",
      grama: "200g de chedder + baicon",
      price: "20,00",
      uri: require("./src/assets/cheddar.png"),
      nota: "2.0",
      off: "15% OFF",
    },
  ];

  const Item = ({ grama, nota, price, uri, off, text }) => (
    <>
      <View
        style={{
          width: 174,
          height: 230,
          borderRadius: 4,
          fontSize: 100,
          borderWidth: 3,
          borderColor: "#D9D9D9",
          marginTop: 0,
          marginLeft: 2,
          marginBottom: 10,
          // marginLeft: 20,
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            width: "100%",
            height: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 5,
            paddingLeft: 5,
          }}
        >
          <View>
            <Text>{nota}</Text>
          </View>
          <View>
            <Text style={{ color: "red" }}>{off}</Text>
          </View>
        </View>
        <Image
          source={uri}
          style={{
            height: price === "18,00" ? 80 : 85,
            width: price === "18,00" ? 80 : 115,
            alignSelf: "center",
            marginTop: 12,
          }}
        ></Image>

        <Text style={{ left: 5, fontSize: 14 }}>{text}</Text>
        <Text style={{ fontSize: 12, marginLeft: 5, color: "#9A9A9A" }}>
          {grama}
        </Text>
        <Text style={{ marginLeft: 5, color: "#F3890C" }}>R$ {price} </Text>

        <TouchableOpacity
          onPress={() => {
            setModal(!modal);
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#F3890C",
              borderRadius: 100,
              alignSelf: "flex-end",
              bottom: 0,
              marginRight: 10,
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>+</Text>
          </View>
        </TouchableOpacity>
        <View style={{ height: 10 }} />
      </View>
    </>
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      nota={item.nota}
      price={item.price}
      uri={item.uri}
      grama={item.grama}
      off={item.off}
      text={item.text}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {modal === true ? null : (
        <Header
          welcone={"Bem Vindo!"}
          name={"Vanessa Silva Lopes"}
          textLocalization={"Rua Represa de Pirajá"}
        />
      )}
      <View style={{ height: 200, width: "100%", flex: 1, marginTop: 40 }}>
        {modal === true ? null : (
          <>
            <SearchInput
              title={"Pesquisar por: nome, tag,tipo"}
              menu={menu}
              setMenu={setMenu}
            />

            {menu ? (
              <>      
                <View
                  style={{
                    height: 150,
                    width: 120,
                    backgroundColor: "white",
                    right: 40,
                    top: 80,
                    position: "absolute",
                    zIndex: 99999,
                    borderRadius: 10,
                    borderWidth: 3,
                    borderColor: "#F3890C",
                    marginTop: 0,
                    marginLeft: 2,
                    marginBottom: 10,
                  }}
                >

              <View style={{top:10}}>
              <TouchableOpacity>
                    <Text style={{color:'#F3890C',left:10}}>Perfil</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{color:'#F3890C',left:10}}>Todos Produtos</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{color:'#F3890C',left:10}}>Configuração</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{color:'#F3890C',left:10}}>Chat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{color:'#F3890C',left:10}}>Suporte</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{color:'#F3890C',left:10}}>SAIR DO APP</Text>
                  </TouchableOpacity>
              </View>
                </View>
              </>
            ) : null}
          </>
        )}
        <View style={{ flex: 1, bottom: 200 }}>
          {modal === true ? null : (
            <>
              <Banner01 />
              <View>
                <CategoryText title={"Categoria"} allTex={"todos"} />
              </View>
            </>
          )}
          <View>
            {modal === true ? null : <Category />}
            <View style={{ marginLeft: 20, marginTop: 20 }}>
              <FlatList
                numColumns={2}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
            <View style={{ height: 250 }} />
          </View>
        </View>
      </View>
      {modal ? (
        <View>
          <Modal setModal={setModal} modal={modal} />
        </View>
      ) : null}
    </View>
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
