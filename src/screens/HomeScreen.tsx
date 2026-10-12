
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>UA</Text>
      </View>

      <Text style={styles.name}>Uwimbabazi Aimerance</Text>
      <Text style={styles.course}>Software Engineering</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>About Me</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Skills')}
      >
        <Text style={styles.buttonText}>My Skills</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Projects')}
      >
        <Text style={styles.buttonText}>My Projects</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>My Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#F1F5F9',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2457C5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#172554',
    textAlign: 'center',
  },
  course: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 8,
    marginBottom: 25,
  },
  button: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#2457C5',
    padding: 16,
    borderRadius: 10,
    marginVertical: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
