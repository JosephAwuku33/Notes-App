import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function findNotes(setItems) {
  try {
    const value = await AsyncStorage.getItem('notes');
    const result = JSON.parse(value);
    if (value !== null) {
      setItems(result);
    }
  } catch (error) {
    console.log(error);
    ToastAndroid.show("Error loading notes", ToastAndroid.SHORT)
  }
}

export async function saveNote(titler, noter, notes, setNotes, navigation) {
  try {
    const noteObj = { id: Date.now(), titler, noter };
    const updatedNotes = [...notes, noteObj];
    setNotes(updatedNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    ToastAndroid.show("Saved Successfully", ToastAndroid.SHORT);
    navigation.navigate('Home');
  } catch (err) {
    console.log(err);
  }
}

export async function loadNotes(setNotes) {
  try {
    const value = await AsyncStorage.getItem('notes');
    const result = JSON.parse(value);
    if (value !== null) {
      setNotes(result);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteNote(noteId, navigation) {
  try {
      // Fetch notes from AsyncStorage and filter out the note to delete
      const notes = await AsyncStorage.getItem('notes');
      const updatedNotes = JSON.parse(notes).filter(note => note.id !== noteId);
      
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
      ToastAndroid.show("Note deleted successfully", ToastAndroid.SHORT);
      navigation.navigate("Home");
  } catch (err) {
      console.log(err);
  }
}


