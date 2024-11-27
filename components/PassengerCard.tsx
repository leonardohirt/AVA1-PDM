import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

type PassengerCardProps = {
    name: string,
    avatar: string,
    id: number,
}

export default function PassengerCard({name, avatar, id}: PassengerCardProps) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text>ID: {id}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#333',
      width: '120%',
      margin: 4,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 10,
      borderWidth: 1.4,
      borderColor: 'black',
      marginRight: 8,
    },
    textContainer: {
      justifyContent: 'center',
    },
    name: {
      fontWeight: 'bold',
    },
  });