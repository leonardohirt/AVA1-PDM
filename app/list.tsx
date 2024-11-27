import { View, Text, StyleSheet, SectionList, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { groupPassengersByCountry } from '../helpers/groupPassengers'
import { Ionicons } from '@expo/vector-icons'
import PassengerCard from '../components/PassengerCard'
import { Image } from 'react-native';

export default function list() {
    const sections = groupPassengersByCountry();

  return (
      <View style={styles.container}>
        <View style={styles.content}>
        <View style={styles.logoContainer}>

        <Image
            source={require('../assets/aviao.jpg')} 
            style={styles.logoImage}
            resizeMode="contain"
          />

            <Text style={styles.title}>FlyAirLines</Text>
          </View>

          <View style={styles.list}>
            <SectionList
              sections={sections}
              keyExtractor={(item, index) => `${item.id}-${index}`}
              renderItem={({ item }) => (
                <PassengerCard
                name={item.passenger_name}
                avatar={item.passenger_avatar}
                id={item.id}
              />
              )}
              renderSectionHeader={({ section }) => (
                <View style={styles.header}>
                  <Text style={styles.headerText}>{section.title}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  logoImage: {
    margin: 8,
    width: 100,  
    height: 100, 
  },
  
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    margin: 50,
  },
  list: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 50,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});