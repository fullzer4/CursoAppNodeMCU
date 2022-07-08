import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

import axios from "axios"

export default function App() {
  const [ledVm, setLedVm] = useState(false)
  const [ledVd, setLedVd] = useState(false)
  
  const isSwitch = () =>{
    setLedVm(previousState => !previousState) //pegar o valor do state e botar o contrario dele false = true
  }

  const envLedVm = () => {
    if(ledVm === false){
      axios.get("endereço esp")
    }
  }

  const isSwitch2 = () =>{
    setLedVd(previousState => !previousState) //pegar o valor do state e botar o contrario dele false = true
  }

  return (
    <>
      <StatusBar/>
      <ScrollView>
      <View>
        <Text>Led Vermelho</Text>
        <View>
          <Text style={ledVm ? styles.ON : styles.OFF}> {ledVm ? "ligado" : "desligado"}</Text>
          <Switch onValueChange={isSwitch} value={ledVm}></Switch>
        </View>
        <Text>Led Verde</Text>
        <View>
          <Text style={ledVd ? styles.ON : styles.OFF}> {ledVd ? "ligado" : "desligado"}</Text>
          <Switch onValueChange={isSwitch2} value={ledVd}></Switch>
        </View>
      </View>
      </ScrollView>
      <Text>Versão alfa 0.1</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight:"bold",
    fontSize: 25,
    marginTop: 15,
    marginLeft25
  },
});
