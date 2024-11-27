import { View, Text, TextInput, StyleSheet, Alert, StatusBar, ImageBackground, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ImageButton from '../components/ImageButton'
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    
    const handleLogin = () => {
        if (username === 'fulano' && password === '123') {
            Alert.alert('Login feito com sucesso');
            router.push('/list');
        } else {
            Alert.alert('Falha no login', 'Usuário ou senha incorreta, tente novamente!');
        }
    };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.logoContainer}>

          <Image
            source={require('../assets/aviao.jpg')} 
            style={styles.logoImage}
            resizeMode="contain"
          />

          </View>

          <View style={styles.loginForm}>
            <Text style={styles.title}>Login</Text>

            <TextInput
              
              style={styles.input}
              placeholder="Nome de usuário"
              value={username}
              onChangeText={setUsername}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <View style={styles.image}>
              <ImageButton
                style={{ width: 70, height: 50, }}
                source={require('../assets/Login.png')} 
                onPress={handleLogin}
              />
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logoImage: {
    margin: 8,
    width: 100,  
    height: 100, 
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    margin: 50,
  },

  loginForm: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'white',
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});