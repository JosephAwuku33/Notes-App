import React, { useEffect, useState } from 'react';
import { FlatList, ToastAndroid, TouchableOpacity } from 'react-native';
import { StyledView, StyledText } from '../misc/StyledComponents';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteList from '../components/NoteList';


function ListScreen({ navigation }) {
    
    const [items, setItems] = useState([]);

    async function findNotes() {
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

    useEffect(() => {
        findNotes();
        console.log(items)
    },[]);



    return (
        <SafeAreaView>
            <StyledView className='flex min-h-screen bg-primary'>
            <StyledView className='mt-5  ml-2 p-1 mx-1'>
                {/**have to put the NoteList Component here */}
                    <FlatList
                    data={items}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent:'space-between', marginBottom:15 }}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => <NoteList item={item} /> }
                    />
            </StyledView>
            { !items.length ?
              <StyledView className='flex items-center justify-center'>
                    <StyledText className='text-3xl font-light'>
                        Add Note
                    </StyledText>
                </StyledView> : null }
            <TouchableOpacity onPress={() => navigation.navigate('NewNote')} className='absolute bottom-0 right-0 m-14 mr-4 z-10 rounded-full bg-secondary'>
                    <StyledView className='p-4'>
                        <Ionicons name="add" size={36} color="white" />
                    </StyledView>
               </TouchableOpacity>
            </StyledView>
        </SafeAreaView>
    );
}

export default ListScreen