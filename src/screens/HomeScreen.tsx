
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }: any) {
  const buttons = [
    { title: 'About Me', screen: 'About' },
    { title: 'My Skills', screen: 'Skills' },
    { title: 'My Projects', screen: 'Projects' },
    { title: 'My Profile', screen: 'Profile' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>UA</Text>
      </View>

      <Text style={styles.name}>Uwimbabazi Aimerance</Text>
      <Text style={styles.course}>Software Engineering</Text>

      {buttons.map((item) => (
        <TouchableOpacity
          key={item.screen}
          style={styles.button}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={styles.buttonText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2447A8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  avatarText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#172554',
  },
  course: {
    fontSize: 16,
    color: '#555',
    marginBottom: 25,
  },
  button: {
    width: '90%',
    backgroundColor: '#2447A8',
    padding: 15,
    borderRadius: 10,
    marginVertical: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
