import React, { useState } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, Keyboard, ToastAndroid } from 'react-native';
import { StyledView } from '../misc/StyledComponents';
import { StyledInput } from '../misc/StyledComponents';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { editNote } from '../utils/noteFunctions';

export default function EditNoteScreen({ route }) {
    
    const { noteId, title, content } = route.params;
    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);
    const [ notes, setNotes] = useState([]);
    const navigation = useNavigation();

   

    const handleSaveChanges = () => {
        // Call the editNote function to save changes
        editNote(noteId, newTitle, newContent, setNotes);
        navigation.navigate("Home");
        ToastAndroid.show("Note successfully edited", ToastAndroid.LONG);
        console.log(notes);
    };

    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <StyledView className='flex min-h-screen bg-primary'>
                    <StyledInput className='mt-1 px-4 font-extrabold text-3xl text-left' onChangeText={(text) => setNewTitle(text) }
                        value={newTitle}
                        numberOfLines={2}
                        autoFocus={true}
                        returnKeyType="next"
                         />

                    <StyledInput className='mt-1 px-5 font-medium text-xl text-left'
                        onChangeText={(text) => setNewContent(text)}
                        value={newContent}
                        multiline={true}

                    />
                    <TouchableOpacity onPress={() => handleSaveChanges()} className='absolute bottom-0 right-0 m-14 mr-4 z-10 rounded-full bg-secondary '>
                        <StyledView className='p-4'>
                            <Feather name="save" size={36} color="white" />
                        </StyledView>
                    </TouchableOpacity>
                </StyledView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}