
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { Camera,  } from 'expo-camera';
import { useState } from 'react';

export default function App() {
  
const [type, setSetType] = useState(Camera.Constants.Type.back);
const [hasPermission, setHasPermission] = useState(null) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
