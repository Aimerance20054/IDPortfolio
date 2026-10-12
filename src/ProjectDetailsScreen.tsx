
import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ProjectDetailsScreen() {
  const route = useRoute<any>();
  const project = route.params?.project;

  if (!project) {
    return (
      <Text style={styles.error}>
        Project details are not available.
      </Text>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{project.name}</Text>

      <Text style={styles.heading}>Project Description</Text>
      <Text style={styles.description}>
        {project.description}
      </Text>

      <Text style={styles.heading}>Problem</Text>
      <Text style={styles.description}>
        {project.problem}
      </Text>

      <Text style={styles.heading}>My Contribution</Text>
      <Text style={styles.description}>
        {project.contribution}
      </Text>

      <Text style={styles.heading}>Technologies Used</Text>
      <Text style={styles.description}>
        {project.technologies}
      </Text>
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
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2457C5',
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#172554',
    marginTop: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#475569',
  },
  error: {
    padding: 20,
    fontSize: 16,
    color: '#B91C1C',
  },
});
