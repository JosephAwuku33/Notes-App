import { StyledView, StyledInput } from '../misc/StyledComponents';
import React from 'react';
import { TextInput, View } from "react-native";


function Note({title, note, onChangeTitle, onChangeNotes}) {

    return (
        <StyledView>
            <StyledInput className='mt-1 px-4 font-extrabold text-4xl text-left' onChangeText={onChangeTitle} value={title} placeholder='Title' multiline={true} numberOfLines={4}/>
            <StyledInput className='mt-1 px-5 font-medium text-xl text-left' onChangeText={onChangeNotes} value={note} multiline={true}  placeholder='Type anything here.....'/>
        </StyledView>
     );
}

export default Note;