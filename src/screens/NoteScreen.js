import React, { useEffect, useState } from 'react';
import {  TouchableOpacity, Alert, ToastAndroid, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StyledView, StyledText } from '../misc/StyledComponents';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import Note from '../components/Note';
import AsyncStorage from '@react-native-async-storage/async-storage';



function NoteScreen() {
    const [title, setTitle] = useState('');
    const [note, setNote ] = useState('');
    const [notes, setNotes] = useState([]);

    {/*useEffect(() => {
        AsyncStorage.clear()
    });*/}

    async function savedNote(titler, noter){
        try {
            const noteObj = { id: Date.now(), titler, noter };
            console.log(title)
            console.log(noteObj)
            const updatedNotes = [...notes, noteObj];
            setNotes(updatedNotes)
            await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
            
        } catch (err) {
            console.log(err)
        }
    }

    async function loadNotes() {
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

    useEffect(() => {
        loadNotes();
        console.log(notes)
    },[]);

    
    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <StyledView className='flex min-h-screen bg-primary'>
                    <Note title={title} note={note} onChangeNotes={(text) => setNote(text)} onChangeTitle={(text) => setTitle(text)}  />
                    <TouchableOpacity onPress={() => savedNote(title, note)} className='absolute bottom-0 right-0 m-14 mr-4 z-10 rounded-full bg-secondary '>
                        <StyledView className='p-4'>
                            <Feather name="save" size={36} color="white" />
                        </StyledView>
                    </TouchableOpacity>
                </StyledView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default NoteScreen