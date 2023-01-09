import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Walker from '../../assets/images/Walker.png';
import { StyledView, StyledText, StyledTP, StyledImage } from '../misc/StyledComponents';


function Home({ navigation }) {


    const createNote = () => {
        navigation.navigate('NewNote')
    }

    const noteList = () => {
        navigation.navigate('NoteList')
    }

    return (
        <SafeAreaView>
            <StyledView className='flex min-h-screen items-center justify-center bg-primary'>
                <StyledView className='mb-6 items-center justify-center'>
                    <StyledImage source={Walker}/>
                    <StyledText className='pt-7 font-bold text-3xl'>
                        Create A New Note
                    </StyledText>
                    <StyledText className='text-center font-normal text-sm mx-6'>
                        Add a note about anything( your thought on climate change, or your history essay) and share it with the world
                    </StyledText>
                    <StyledTP onPress={createNote} className='mt-16 shadow-xl py-4 px-24 bg-secondary rounded-lg items-center'>
                        <StyledText className='text-primary text-center items-center font-extrabold'>
                            Create a New Note
                        </StyledText>
                    </StyledTP>
                    <StyledTP onPress={noteList} className='mt-4 items-center justify-center'>
                        <StyledText className='text-secondary text-center items-center font-normal text-lg'>
                            Recent Notes
                        </StyledText>
                    </StyledTP>
                </StyledView>
            </StyledView>
        </SafeAreaView>
    );
}

export default Home