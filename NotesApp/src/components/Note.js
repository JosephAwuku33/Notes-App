import { StyledView, StyledInput } from '../misc/StyledComponents';
import React, { useRef } from 'react';


function Note({title, note, onChangeTitle, onChangeNotes}) {

    const ref_input2 = useRef();

    return (
        <StyledView>
            <StyledInput className='mt-1 px-4 font-extrabold text-3xl text-left' onChangeText={onChangeTitle} 
            value={title} 
            placeholder='Title' 
            numberOfLines={2} 
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={() => ref_input2.current.focus()}/>

            <StyledInput className='mt-1 px-5 font-medium text-xl text-left' 
            onChangeText={onChangeNotes} 
            value={note} 
            multiline={true}   
            placeholder='Type anything here.....' 
            ref={ref_input2}
            
            />
        </StyledView>
     );
}

export default Note;