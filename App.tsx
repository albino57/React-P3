import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { style } from "./styles";
import logo from "./assets/logoScreen.jpeg";

export default function App() {
  return <View style={style.container}>

    {/*-----↓ LogoScreen ↓-----*/}
    <Image style={style.image} source={logo} />
    {/*-----↑ LogoScreen ↑-----*/}


    {/*-----↓ View dos Inputs ↓-----*/}
    <View style={style.View1}>
      <Text style={style.textEmoje}>👤</Text>
      <TextInput style={style.textInput} placeholder='Please enter Username or Email' />
    </View>

    <View style={style.lineView}></View>

    <View style={style.View2}>
      <Text style={style.textEmoje}>🔒</Text>
      <TextInput style={style.textInput} placeholder='Please enter Password' />
    </View>

    <View style={style.lineView}></View>
    {/*-----↑ View dos Inputs ↑-----*/}


    {/*-----↓ Text ↓-----*/}
    <Text style={style.textSwitchPhone}>Switch Phone Number Login</Text>
    {/*-----↑ Text ↑-----*/}


    {/*-----↓ Botões ↓-----*/}
    <TouchableOpacity onPress={() => { }} activeOpacity={0.75} style={style.buttonLogin}>
      <Text style={style.textButtonLogin}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => { }} activeOpacity={0.75} style={style.buttonLocalConnec}>
      <Text style={style.textbuttonLocalConnec}>Local Connection</Text>
    </TouchableOpacity>
    {/*-----↑ Botões ↑-----*/}


    {/*-----↓ Painel Inferior Footer ↓-----*/}
    <View style={style.ViewFooter}>
      <Text style={style.textFooter}>Sign up now</Text>
      <Text style={style.textFooter}>|</Text>
      <Text style={style.textFooter2}>Forgot password</Text>
    </View>
    {/*-----↑ Painel Inferior Footer ↑-----*/}
  </View>
}
