
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home from "../NotesApp/src/screens/Home";
import ListScreen from "../NotesApp/src/screens/ListScreen";
import NoteScreen from '../NotesApp/src/screens/NoteScreen';
import EditNoteScreen from './src/screens/EditNoteScreen';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="NewNote" component={NoteScreen} options={{headerShown: false}} />
        <Stack.Screen name="NoteList" component={ListScreen} options={{headerShown: false}} />
        <Stack.Screen name="EditNoteScreen" component={EditNoteScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

