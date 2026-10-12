
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

// Reusable component for displaying skills
function SkillCard({ name, index }: { name: string; index: number }) {
  return (
    <View style={styles.card}>
      <Text style={styles.skill}>
        {index + 1}. {name}
      </Text>
    </View>
  );
}

// Reusable component for education and training
function TimelineItem({
  title,
  institution,
  period,
  description,
}: {
  title: string;
  institution: string;
  period: string;
  description: string;
}) {
  return (
    <View style={styles.timelineCard}>
      <View style={styles.timelineDot} />
      <Text style={styles.educationTitle}>{title}</Text>
      <Text style={styles.institution}>{institution}</Text>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

export default function SkillsScreen() {
  const skills = [
    'HTML and CSS',
    'JavaScript',
    'React Native',
    'Python',
    'Java',
    'PHP and MySQL',
    'Database Design',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Skills</Text>

      <Text style={styles.subtitle}>
        Technical skills and technologies I have learned.
      </Text>

      {skills.map((skill, index) => (
        <SkillCard
          key={skill}
          name={skill}
          index={index}
        />
      ))}

      <Text style={styles.sectionTitle}>
        Education & Training
      </Text>

      <TimelineItem
        title="Software Engineering"
        institution="INES-Ruhengeri"
        period="Year 3"
        description="Learning software development, programming, databases and mobile application development."
      />

      <TimelineItem
        title="Mobile Application Development"
        institution="INES-Ruhengeri"
        period="Current learning"
        description="Practicing React Native, Expo, TypeScript and mobile navigation through a personal portfolio application."
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F2F6FF',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2457C5',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: '#64748B',
    marginBottom: 18,
  },
  card: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 12,
  },
  skill: {
    fontSize: 17,
    color: '#172554',
  },
  sectionTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#2457C5',
    marginTop: 24,
    marginBottom: 16,
  },
  timelineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#2457C5',
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2457C5',
    marginBottom: 10,
  },
  educationTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 5,
  },
  institution: {
    fontSize: 15,
    color: '#334155',
    marginBottom: 4,
  },
  period: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2457C5',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: '#475569',
  },
});
