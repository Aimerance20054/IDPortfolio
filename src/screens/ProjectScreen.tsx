
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProjectsScreen() {
  const navigation = useNavigation<any>();

  const projects = [
    {
      name: 'Patient Appointment System',
      description:
        'A system for managing clinic appointments and predicting patient waiting time.',
      problem:
        'Patients may experience long waiting times because appointments are not well coordinated.',
      contribution:
        'I worked on designing a system to manage appointments and help predict patient waiting time.',
      technologies: 'Python, Django, JavaScript and SQLite',
    },
    {
      name: 'Student Management System',
      description:
        'An application for managing student information and academic records.',
      problem:
        'Managing student information manually can take time and lead to errors.',
      contribution:
        'I designed a system concept for organizing student records and academic information.',
      technologies: 'PHP, MySQL, HTML and CSS',
    },
    {
      name: 'Personal Portfolio App',
      description:
        'A mobile application presenting my profile, skills, and projects.',
      problem:
        'It can be difficult to present personal information, skills and projects in one place.',
      contribution:
        'I am developing this mobile app to present my profile, skills and projects.',
      technologies: 'React Native, Expo and TypeScript',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Projects</Text>
      <Text style={styles.subtitle}>
        Tap a project to view its details.
      </Text>

      {projects.map((project) => (
        <TouchableOpacity
          key={project.name}
          style={styles.card}
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate('ProjectDetails', {
              project,
            })
          }
        >
          <Text style={styles.projectName}>
            {project.name}
          </Text>

          <Text style={styles.description}>
            {project.description}
          </Text>

          <Text style={styles.link}>
            View Project Details →
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#F2F6FF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2457C5',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: '#475569',
  },
  link: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2457C5',
    marginTop: 14,
  },
});
