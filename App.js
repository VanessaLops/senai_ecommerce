import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Banner from "./src/components/banner";
import Banner01 from "./src/components/banner/banner";
import Header from "./src/components/header";
import SearchInput from "./src/components/search";

export default function App() {
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
        </View>
        {/* <View style={{ flex: 1,bottom:200 }}>
        <Banner />
      </View> */}
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
