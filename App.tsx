import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { style } from "./styles";
import logo from "./assets/logoScreen.jpeg";
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

export default function App() {

  /*-----↓ Dropdown - Lógica ↓-----*/
  const [location, setLocation] = useState('Internacional');
  const locationData = [ { label: 'Internacional',  value: 'Internacional' },
                         { label: 'Mainland China', value: 'Mainland China' }, ];

  const [language, setLanguage] = useState('English');
  const languegeData = [ { label: 'English',  value: 'English' },
                         { label: '简体中文', value: '简体中文' }, ];                     
  /*-----↑ Dropdown - Lógica ↑-----*/


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


    {/*-----↓ Dropdown - Aba de seleção ↓-----*/}
    <View style={style.dropdownMain}>
      <Text style={style.textEmoje}>📍</Text>
      
      <View style={style.dropdownWrapper}>
        <Dropdown
          style={style.dropdown}
          containerStyle={style.dropdownMenuList} // Estilo da caixinha que flutua
          data={locationData}
          labelField="label"
          valueField="value"
          placeholder="Select Country"
          value={location}
          onChange={item => {setLocation(item.value);}}
          
          selectedTextStyle={style.dropdownTextSelected}
          itemTextStyle={style.dropdownItemText}
          activeColor="#91919192"
        />
      </View>
    </View>

      <View style={style.lineViewDropDown}></View>

    <View style={style.dropdownMain2}>
      <Text style={style.textEmoje}>🗣️</Text>

      <View style={style.dropdownWrapper2}>
        <Dropdown
          style={style.dropdown}
          containerStyle={style.dropdownMenuList} // Estilo da caixinha que flutua
          data={languegeData}
          labelField="label"
          valueField="value"
          placeholder="Select Language"
          value={language}
          onChange={item => { setLocation(item.value);}}
          
          selectedTextStyle={style.dropdownTextSelected}
          itemTextStyle={style.dropdownItemText}
          activeColor="#91919192"
        />
      </View>
    </View>

      <View style={style.lineViewDropDown}></View>
    {/*-----↑ Dropdown - Aba de seleção ↑-----*/}


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
