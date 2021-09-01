import React,{useState} from 'react';
import {
    View, 
    TextInput,
    Text, 
    TouchableOpacity, 
    StyleSheet
} from 'react-native';

import API_URLS from '../service/apiURL'
import firebase from '../util/Firebase'

const CreateScreen = () =>{
    const [todo, setTodo] = useState('');
  
    const dbRef = firebase.database().ref(API_URLS.TODO_LIST.ADD)

    const addTodo = () =>{
        const todoRef = dbRef;
        const todoList = {
            title: todo,
            complete: false,
          };
        setTodo('')
        
        todoRef.push(todoList)
    }

    return (
        <View style={styles.viewContainer}>
            <View style={styles.boxContainer}>
                <Text style={styles.todoText}>Todo :</Text>
                <View style={styles.textInput}>
                    <TextInput
                        value={todo}
                        placeholder = "Wake up at 4:00 A.M !"
                        onChangeText = {setTodo}
                        style={{
                            marginLeft:15,
                            marginTop:10,
                            fontSize:17,
                            color:'#0077ff'}}
                    />
                </View>

                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={addTodo}>
                        <Text style={styles.createText}>CREATE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0077ff'
    },
    boxContainer:{
        position:'absolute',
        height:350,
        left:20,
        right:20,
        elevation:5,
        backgroundColor:'#FFF',
        borderRadius:15,
    },
    textInput:{
        width:320,
        height:50,
        backgroundColor:'#eee',
        borderRadius:10,
        borderColor:'#FFF',
        borderWidth:1,
        alignSelf:'center',
        marginTop:25
    },
    todoText:{
        fontSize:35,
        fontWeight:'bold',
        color:'#0077ff',
        marginTop:35,
        marginLeft:15
    },
    buttonView:{
        width:200,
        height:60,
        backgroundColor:'#0077ff',
        marginTop:60,
        borderRadius:10,
        alignSelf:'center'
    },
    createText:{
        fontSize:17,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:17,
        color:'#FFF',
        letterSpacing:10
    }
})

export default CreateScreen;