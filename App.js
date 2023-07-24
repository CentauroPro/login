import { StatusBar } from "expo-status-bar";

import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const mensaje = () => {
    Alert.alert("ingreso", "Usted ingreso correctamente");
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/image/policia.png")}
    >
      <Text style={styles.textpolicia}>POLICIA NACIONAL DEL ECUADOR </Text>

      <TouchableOpacity style={styles.ima}>
        <Image
          source={require("./assets/image/placa-de-policia.png")}
          style={styles.ima}
        />
      </TouchableOpacity>

      <View style={styles.conta}>
        <TextInput placeholder="Ingrese Usuario" style={styles.input} />

        <TextInput placeholder="Ingrese Clave" style={styles.input1} />
        <Text></Text>
      </View>

      <TouchableOpacity style={styles.btningreasr} onPress={mensaje}>
        <Text style={{ color: "with", fontSize: 23 }}> Ingresar </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  conta: {
    borderWidth: 1,
    backgroundColor: "rgba(42, 42, 42, 0.5)",
    marginBottom: 30,
    width: "80%",
    height: 170,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#00d0ffde",
  },
  


  textpolicia: {
    fontSize: 38,
    textAlign: "center",
    color: "#f2e8e8",
    marginBottom: 300,
  },
  input: {
    backgroundColor: "#d7daf0",
    width: "85%",
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 25,
    textAlign: "center",
    borderColor: "  #32d0ec ",
    borderEndWidth: 4,
    marginBottom: 20,
  },
  input1: {
    backgroundColor: "#d7daf0",
    width: "85%",
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 25,
    textAlign: "center",
    borderColor: " #1ab7d2 ",
    borderEndWidth: 4,
    marginBottom: 20,
  },
  btningreasr: {
    backgroundColor: "#00d0ffde",
    height: 30,
    width: 120,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  ima: {
    height: 100,
    width: 100,
    marginBottom: 30,
  },
  ima1: {
    height: 100,
    width: 100,
  },
});
