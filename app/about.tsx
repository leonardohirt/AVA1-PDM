import { View, Text, ImageBackground, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native';


export default function about() {
  const handleOpenLink = () => {
    Linking.openURL('https://github.com/leonardohirt/AVA1-PDM')
  }

  return (

<View style={styles.container}>
  <View style={styles.content}>
    <View style={styles.logoContainer}>
      
    <Image
            source={require('../assets/aviao.jpg')} 
            style={styles.logoImage}
            resizeMode="contain"
          />
      
      <Text style={styles.logoTitle}>FlyAirLines</Text>
    </View>
  </View>

          <View style={styles.about}>
            <Text style={styles.title}>Developed by:</Text>
            <View style={styles.aboutMe}>
              <Text style={styles.name}>Leonardo Hirt Moraes</Text>
              <TouchableOpacity
              onPress={handleOpenLink}>
                <Text style={styles.git}>GitHub</Text>
              </TouchableOpacity>
              <View style={styles.logoPC}>
                <Ionicons name="desktop" size={100} color="black" />
                </View>
            </View>
          </View>
        </View>

  )
}

const styles = StyleSheet.create ({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

    logoImage: {
      margin: 8,
      width: 100,  
      height: 100, 
    },

    logoPC: {
      margin: 15,
    },

  container: {
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    margin: 50,
  },
  about: {
    backgroundColor: '#f7f7f7',
    flex: 1, 
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 14,
  },
  aboutMe: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    marginBottom: 20,
  },
  git: {
    color: '#0000FF',
    fontSize: 18, 
  },
  logoTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})