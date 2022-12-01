import { StatusBar } from "expo-status-bar";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Banner from "./src/components/banner";
import Banner01 from "./src/components/banner/banner";
import Category from "./src/components/category";
import CategoryText from "./src/components/category/categoryText";
import Header from "./src/components/header";
import SearchInput from "./src/components/search";

export default function App() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Hamburguer Tradicional",
      grama: "200g de chedder + baicon",
      price: "18,00",
      image: "./src/assets/hambu.png",
      nota: "3.5",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Hamburguer Tradicional",
      grama: "200g de chedder + baicon",
      price: "12,00",
      // image: require("./src/assets/hambu.png"),
      nota: "4.5",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Hamburguer Tradicional",
      grama: "200g de chedder + baicon",
      price: "30,00",
      // image: require("./src/assets/hambu.png"),
      nota: "3.3",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Hamburguer Tradicional",
      grama: "200g de chedder + baicon",
      price: "20,00",
      // image: require("./src/assets/hambu.png"),
      nota: "2.0",
    },
  ];

  const Item = ({ title, nota, price, image }) => (
    <View
      style={{
        width: 174,
        height: 180,
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
          <Text style={{ color: "red" }}>10% off</Text>
        </View>
      </View>
      <Image
        source={require(image)}
        style={{
          height: 50,
          width: 50,
          backgroundColor: "blue",
          alignSelf: "center",
          marginTop: 10,
        }}
      ></Image>

      <Text style={{ left: 5, fontSize: 16 }}>X-Salada</Text>
      <Text style={{ fontSize: 12, marginLeft: 5, color: "#9A9A9A" }}>
        Alface,repolho,molho
      </Text>
      <Text style={{ marginLeft: 5, color: "#F3890C" }}>R$ {price} </Text>
      {/* <Text style={styles.title}>{title}</Text> */}
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} nota={item.nota} price={item.price} image={item.image} />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header
        welcone={"Bem Vindo!"}
        name={"Vanessa Silva Lopes"}
        textLocalization={"Rua Represa de Pirajá"}
      />

      <View style={{ height: 200, width: "100%", flex: 1, marginTop: 40 }}>
        <SearchInput title={"Pesquisar por: nome, tag,tipo"} />

        <View style={{ flex: 1, bottom: 200 }}>
          <Banner01 />
          <View>
            <CategoryText title={"Categoria"} allTex={"todos"} />
          </View>
          <View>
            <Category />
            <View style={{ marginLeft: 20, marginTop: 20 }}>
              <FlatList
                numColumns={2}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </View>
      </View>
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
