import React from 'react';
import { StyledText } from '../misc/StyledComponents';
import {  TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NoteCard({ item, onDelete }) {
    const { titler, noter } = item;
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() =>
           navigation.navigate('EditNoteScreen', { noteId: item.id, title: item.titler, content: item.noter })}
            onLongPress={onDelete}
            style={{
                backgroundColor: '#fff', alignItems: 'flex-start', paddingLeft: 10, width: '50%',
                height: 150,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
                paddingVertical: 30,
                margin: '1%',
                borderRadius: 20,
            }}>
            <StyledText className='text-left text-md font-bold ' >{titler}</StyledText>
            <StyledText className='text-left text-sm font-light' >{noter}</StyledText>
        </TouchableOpacity>

    );
}

export default NoteCard;