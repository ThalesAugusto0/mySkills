import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  const [newSkil, setNewSkill] = useState('');
  const [mySkills, setMySkill] = useState([]);

  function handleAddNewSkill() {
    setMySkill(oldState => [...oldState, newSkil]);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Thales</Text>

        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

        {mySkills.map(skill => (
          <SkillCard skill={skill} />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121016',
    paddingHorizontal: 20,
    paddingVertical: 70,
    // eslint-disable-next-line no-dupe-keys
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
