import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, TextInput } from 'react-native';
import image from './assets/pablo.jpg';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [count, setCount] = useState(0);
  
  const onPress = () => setCount(prevCount => prevCount + 1);

  const handlePress = () => {
    Alert.alert(`Input 1: ${input1}`, `Input 2: ${input2}`);
    console.log('hola');
  };

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Se requiere el permiso para acceder a las fotos');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled === true) {
      return;
    }
    console.log(pickerResult);
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Cartera $$$$$</Text>
      <Image source={image} style={style.image} />
      
      <TextInput
        style={style.input}
        placeholder="Campo de texto 1"
        value={input1}
        onChangeText={setInput1}
      />
      
      <TextInput
        style={style.input}
        placeholder="Campo de texto 2"
        value={input2}
        onChangeText={setInput2}
      />
      
      <View style={style.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      
      <TouchableOpacity style={style.button} onPress={onPress}>
        <Text style={style.buttonText}>Presioname</Text>
      </TouchableOpacity>

      <Text style={style.title}>Presiona en la imagen</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          source={{ uri: 'https://picsum.photos/200/200' }}
          style={style.image}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('zamba')} style={style.button}>
        <Text style={style.buttonText}>Compartir</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 90,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
    width: '50%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'gray',
    padding: 7,
    marginTop: 10,
    borderRadius: 20,
    width: 190,
    height: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;

