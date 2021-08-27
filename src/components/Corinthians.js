import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, Modal, Pressable } from 'react-native';
import styled from 'styled-components/native';

// const Title = styled.h1`
//   font-size: 1.5rem;
//   text-align: center;
//   color: black;
// `;

// const Wrapper = styled.section`
//   padding: 4em;
//   background: red
// `;

const Cabecalho = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>Todo Poderoso Timão</Text>
    </View>
  );
}

const Body = () => {
  return (
    <View style={styles.body}>
      <Image style={styles.image} source={image}/>
      <Text style={styles.textBody}>Salve o Corinthians, o campeão dos campeões!</Text>
    </View>
  );
}

const Footer = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  return (
    <View style={styles.footer}>
      <View style={styles.left}>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextTitle}>
              Todos os títulos dos Corinthians: 
            </Text>
            <Text style={styles.modalTextBody}>
              Campeonatos Brasileiro: 7 títulos {"\n"}
              Campeonato Brasileiro Série B: 1 título {"\n"}
              Copa do Brasil: 3 títulos {"\n"}
              Campeonato Paulista: 30 títulos {"\n"}
              Torneio Rio São Paulo: 5 títulos {"\n"}
              Taça dos Campeões Rio-São Paulo: 2 títulos {"\n"}
              Copa São Paulo de Futebol Júnior: 10 títulos {"\n"}
              Copa Libertadores da América: 1 título {"\n"}
              Recopa Sul-Americana: 1 título {"\n"}
              Supercopa do Brasil: 1 título {"\n"}
              Mundial de Clubes: 2 títulos {"\n"}
              Tríplice Coroa International: 1 título
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Títulos</Text>
      </Pressable>
    </View>
      </View>
      <View style={styles.right}>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTextTitle}>
              Elenco atual do Corinthians
            </Text>
            <Text style={styles.modalTextBody}>
              Cássio {"\n"}
              Fágner {"\n"}
              Gil {"\n"}
              Victor Hugo {"\n"}
              Fábio Santos {"\n"}
              Gabriel {"\n"}
              Renato Augusto{"\n"}
              Roni {"\n"}
              Giuliano {"\n"}
              Mosquito {"\n"}
              Jô
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible2(true)}
      >
        <Text style={styles.textStyle}>Jogadores</Text>
      </Pressable>
    </View>
      </View>
    </View>
  );
}
const image = { uri: "https://logodetimes.com/times/corinthians/logo-corinthians-2048.png" };

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Body />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  header: {
    height: 100,
    width: 415,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBody: {
    fontSize: 30,
    textAlign: 'center',
  },
  footer: {
    width: 415,
    height: 130,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFooter: {
    color: 'black',
    fontSize: 20
  },
  left: {
    width: 200,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    width: 200,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 450,
    height: 450,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 15,
    elevation: 2, 
    width: 100
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    marginTop: 20,
    backgroundColor: "black",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTextTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalTextBody: {
    textAlign: "left",
    fontSize: 17
  }
})
