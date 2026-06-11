import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {style} from "./styles"

export default function App() {
  return <View style={style.container}>
    

    {/*-----↓ Botões ↓-----*/}
    <TouchableOpacity onPress={()=>{}} activeOpacity={0.75} style={style.buttonLogin}>
      <Text style={style.textButtonLogin}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>{}} activeOpacity={0.75} style={style.buttonLocalConnec}>
      <Text>Local Connection</Text>
    </TouchableOpacity>
  </View>
}
