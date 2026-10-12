
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>About My Portfolio</Text>

      <View style={styles.headerCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>UA</Text>
        </View>

        <Text style={styles.name}>Uwimbabazi Aimerance</Text>
        <Text style={styles.course}>Software Engineering</Text>
        <Text style={styles.school}>INES-Ruhengeri</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Application Information</Text>

        <Text style={styles.label}>Application Name</Text>
        <Text style={styles.value}>UAPortfolio</Text>

        <Text style={styles.label}>Version</Text>
        <Text style={styles.value}>1.0.0</Text>

        <Text style={styles.label}>Student Name</Text>
        <Text style={styles.value}>Uwimbabazi Aimerance</Text>

        <Text style={styles.label}>Registration Number</Text>
        <Text style={styles.value}>25/28028</Text>

        <Text style={styles.label}>Verification Code</Text>
        <Text style={styles.code}>MOB-A2-LLLL</Text>
        <Text style={styles.note}>
          Replace LLLL with the last four digits of your
          registration number.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>About This App</Text>
        <Text style={styles.description}>
          This personal portfolio application presents my
          profile, education, skills, and software projects.
          It allows users to explore my work and update my
          professional profile.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Data Use and Privacy</Text>
        <Text style={styles.description}>
          Profile information is stored locally on this device
          using AsyncStorage. The application is designed to
          access saved profile information without an internet
          connection. Photos are selected from the device
          gallery.
        </Text>
      </View>

      <Text style={styles.footer}>
        Personal Portfolio App • Version 1.0.0
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F3F6FB',
  },
  container: {
    padding: 18,
    paddingBottom: 35,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#183B75',
    textAlign: 'center',
    marginBottom: 20,
  },
  headerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 22,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: '#DCE7FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#2457C5',
  },
  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2457C5',
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#172554',
    marginTop: 13,
    textAlign: 'center',
  },
  course: {
    fontSize: 16,
    color: '#2457C5',
    marginTop: 6,
  },
  school: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#183B75',
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 10,
  },
  value: {
    fontSize: 15,
    color: '#1E293B',
    fontWeight: '600',
    marginTop: 3,
  },
  code: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2457C5',
    marginTop: 5,
    letterSpacing: 1,
  },
  note: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 5,
    lineHeight: 18,
  },
  description: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 23,
  },
  footer: {
    textAlign: 'center',
    color: '#64748B',
    fontSize: 12,
    marginTop: 5,
  },
});
