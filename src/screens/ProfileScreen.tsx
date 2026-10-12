
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const STORAGE_KEY = '@ua_portfolio_profile';

type ProfileData = {
  imageUri: string | null;
  headline: string;
  bio: string;
  primarySkill: string;
  availability: string;
};

const defaultProfile: ProfileData = {
  imageUri: null,
  headline: 'Software Engineering Student',
  bio: 'I am a Software Engineering student interested in software development, mobile applications, and database management.',
  primarySkill: 'React Native',
  availability: 'Available',
};

export default function ProfileScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [headline, setHeadline] = useState(defaultProfile.headline);
  const [bio, setBio] = useState(defaultProfile.bio);
  const [primarySkill, setPrimarySkill] = useState(
    defaultProfile.primarySkill
  );
  const [availability, setAvailability] = useState(
    defaultProfile.availability
  );

  const [savedHeadline, setSavedHeadline] = useState(
    defaultProfile.headline
  );
  const [savedBio, setSavedBio] = useState(defaultProfile.bio);
  const [savedPrimarySkill, setSavedPrimarySkill] = useState(
    defaultProfile.primarySkill
  );
  const [savedAvailability, setSavedAvailability] = useState(
    defaultProfile.availability
  );
  const [savedImageUri, setSavedImageUri] = useState<string | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isEditing, setIsEditing] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Load saved profile when the screen opens.
  useEffect(() => {
    let active = true;

    const loadProfile = async () => {
      try {
        const storedData = await AsyncStorage.getItem(STORAGE_KEY);

        if (storedData && active) {
          const profile: ProfileData = {
            ...defaultProfile,
            ...JSON.parse(storedData),
          };

          setImageUri(profile.imageUri);
          setHeadline(profile.headline);
          setBio(profile.bio);
          setPrimarySkill(profile.primarySkill);
          setAvailability(profile.availability);

          setSavedImageUri(profile.imageUri);
          setSavedHeadline(profile.headline);
          setSavedBio(profile.bio);
          setSavedPrimarySkill(profile.primarySkill);
          setSavedAvailability(profile.availability);

          setIsEditing(false);
        }
      } catch (error) {
        console.error('Error loading profile:', error);
        Alert.alert(
          'Loading problem',
          'Profile data could not be loaded.'
        );
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    loadProfile();

    return () => {
      active = false;
    };
  }, []);

  // Pick a photo from the phone gallery.
  const pickImage = async () => {
    try {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          'Permission required',
          'Please allow access to your photo gallery in your phone settings.'
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets.length > 0) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Image selection error:', error);
      Alert.alert('Error', 'Could not select the photo.');
    }
  };

  // Remove the selected photo.
  const removeImage = () => {
    Alert.alert('Remove photo', 'Do you want to remove your photo?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () => setImageUri(null),
      },
    ]);
  };

  // Check fields before saving.
  const validateProfile = () => {
    const newErrors: Record<string, string> = {};

    if (headline.trim().length < 5) {
      newErrors.headline =
        'Headline must contain at least 5 characters.';
    }

    if (bio.trim().length < 20) {
      newErrors.bio =
        'Biography must contain at least 20 characters.';
    }

    if (primarySkill.trim().length < 2) {
      newErrors.primarySkill =
        'Enter a skill with at least 2 characters.';
    }

    if (!availability.trim()) {
      newErrors.availability =
        'Please enter your availability status.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save all profile data on the phone.
  const saveProfile = async () => {
    if (!validateProfile()) {
      Alert.alert(
        'Check your information',
        'Please correct the errors before saving.'
      );
      return;
    }

    const profileToSave: ProfileData = {
      imageUri,
      headline: headline.trim(),
      bio: bio.trim(),
      primarySkill: primarySkill.trim(),
      availability: availability.trim(),
    };

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(profileToSave)
      );

      setSavedImageUri(profileToSave.imageUri);
      setSavedHeadline(profileToSave.headline);
      setSavedBio(profileToSave.bio);
      setSavedPrimarySkill(profileToSave.primarySkill);
      setSavedAvailability(profileToSave.availability);

      setHeadline(profileToSave.headline);
      setBio(profileToSave.bio);
      setPrimarySkill(profileToSave.primarySkill);
      setAvailability(profileToSave.availability);

      setErrors({});
      setIsEditing(false);

      Alert.alert(
        'Success',
        'Your profile has been saved on this device.'
      );
    } catch (error) {
      console.error('Error saving profile:', error);
      Alert.alert(
        'Save failed',
        'Your profile could not be saved. Please try again.'
      );
    }
  };

  // Return to the last saved information.
  const editProfile = () => {
    setImageUri(savedImageUri);
    setHeadline(savedHeadline);
    setBio(savedBio);
    setPrimarySkill(savedPrimarySkill);
    setAvailability(savedAvailability);
    setErrors({});
    setIsEditing(true);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2457C5" />
        <Text style={styles.loadingText}>Loading your profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.profileHeader}>
        <TouchableOpacity
          onPress={isEditing ? pickImage : undefined}
          activeOpacity={isEditing ? 0.7 : 1}
        >
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, styles.avatarPlaceholder]}>
              <Text style={styles.avatarText}>UA</Text>
            </View>
          )}
        </TouchableOpacity>

        <Text style={styles.name}>Uwimbabazi Aimerance</Text>
        <Text style={styles.headline}>{savedHeadline}</Text>

        {isEditing && (
          <View style={styles.photoButtons}>
            <TouchableOpacity
              style={styles.smallButton}
              onPress={pickImage}
            >
              <Text style={styles.buttonText}>Choose Photo</Text>
            </TouchableOpacity>

            {imageUri && (
              <TouchableOpacity
                style={styles.removeButton}
                onPress={removeImage}
              >
                <Text style={styles.buttonText}>Remove Photo</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>

      {!isEditing ? (
        <View style={styles.card}>
          <Text style={styles.label}>Biography</Text>
          <Text style={styles.value}>{savedBio}</Text>

          <Text style={styles.label}>Primary Skill</Text>
          <Text style={styles.value}>{savedPrimarySkill}</Text>

          <Text style={styles.label}>Availability Status</Text>
          <Text style={styles.value}>{savedAvailability}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={editProfile}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.card}>
          <Text style={styles.label}>Professional Headline</Text>
          <TextInput
            style={[styles.input, errors.headline && styles.inputError]}
            value={headline}
            onChangeText={setHeadline}
            placeholder="Enter your headline"
            maxLength={100}
          />
          {errors.headline ? (
            <Text style={styles.errorText}>{errors.headline}</Text>
          ) : null}

          <Text style={styles.label}>Short Biography</Text>
          <TextInput
            style={[
              styles.input,
              styles.bioInput,
              errors.bio && styles.inputError,
            ]}
            value={bio}
            onChangeText={setBio}
            placeholder="Tell us about yourself"
            multiline
            maxLength={500}
          />
          {errors.bio ? (
            <Text style={styles.errorText}>{errors.bio}</Text>
          ) : null}

          <Text style={styles.label}>Primary Skill</Text>
          <TextInput
            style={[
              styles.input,
              errors.primarySkill && styles.inputError,
            ]}
            value={primarySkill}
            onChangeText={setPrimarySkill}
            placeholder="e.g. React Native"
            maxLength={100}
          />
          {errors.primarySkill ? (
            <Text style={styles.errorText}>{errors.primarySkill}</Text>
          ) : null}

          <Text style={styles.label}>Availability Status</Text>
          <TextInput
            style={[
              styles.input,
              errors.availability && styles.inputError,
            ]}
            value={availability}
            onChangeText={setAvailability}
            placeholder="e.g. Available"
            maxLength={50}
          />
          {errors.availability ? (
            <Text style={styles.errorText}>{errors.availability}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.button}
            onPress={saveProfile}
          >
            <Text style={styles.buttonText}>Save Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={editProfile}
          >
            <Text style={styles.cancelButtonText}>Reset Form</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.note}>
        Your profile information is stored on this device and can be
        restored when you reopen the app.
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
    padding: 20,
    paddingBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F6FB',
  },
  loadingText: {
    marginTop: 12,
    color: '#475569',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#183B75',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 22,
  },
  avatar: {
    width: 115,
    height: 115,
    borderRadius: 58,
    borderWidth: 3,
    borderColor: '#2457C5',
  },
  avatarPlaceholder: {
    backgroundColor: '#DCE7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2457C5',
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#172554',
    marginTop: 12,
  },
  headline: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 5,
  },
  photoButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
    elevation: 2,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#243B63',
    marginTop: 12,
    marginBottom: 7,
  },
  value: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 23,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 9,
    paddingHorizontal: 12,
    paddingVertical: 11,
    fontSize: 15,
    color: '#1E293B',
    backgroundColor: '#FFFFFF',
  },
  bioInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: '#DC2626',
  },
  errorText: {
    color: '#DC2626',
    fontSize: 12,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#2457C5',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 22,
  },
  smallButton: {
    backgroundColor: '#2457C5',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  removeButton: {
    backgroundColor: '#B91C1C',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cancelButton: {
    padding: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  cancelButtonText: {
    color: '#2457C5',
    fontWeight: '600',
  },
  note: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 4,
  },
});
