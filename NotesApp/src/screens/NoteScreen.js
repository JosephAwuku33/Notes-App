import React, { useEffect, useState } from 'react';
import {  TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StyledView } from '../misc/StyledComponents';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import Note from '../components/Note';
import { saveNote, loadNotes } from '../utils/noteFunctions';


function NoteScreen({ navigation }) {
    const [title, setTitle] = useState('');
    const [note, setNote ] = useState('');
    const [notes, setNotes] = useState([]);


    useEffect(() => {
        loadNotes(setNotes);
        console.log(notes)
    },[]);

    
    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <StyledView className='flex min-h-screen bg-primary'>
                    <Note title={title} note={note} onChangeNotes={(text) => setNote(text)} onChangeTitle={(text) => setTitle(text)}  />
                    <TouchableOpacity onPress={() => saveNote(title, note, notes, setNotes, navigation)} className='absolute bottom-0 right-0 m-14 mr-4 z-10 rounded-full bg-secondary '>
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