import React,{useState, useEffect} from 'react';
import {
    ScrollView, 
    Text, 
    View, 
    StyleSheet
} from 'react-native';

import API_URLS from '../service/apiURL'
import firebase from '../util/Firebase'
import TodoForm from './TodoForm'

const DisplayScreen = () =>{
    const [todoList, setTodoList] = useState();

    const dbRef = firebase.database().ref(API_URLS.TODO_LIST.ADD)

    useEffect(()=>{
        const todoRef = dbRef;
        todoRef.on('value', (snapshot)=>{
            const todos = snapshot.val();
            const todoList = []
            for (let id in todos){
                todoList.push({id, ...todos[id]})
            }
            setTodoList(todoList)
        })
    },[])


    return (
        
            <View style={styles.viewContainer}>
                 <View style={styles.boxContainer}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:15}}>
                        <Text>
                                {todoList
                                        ? todoList.map((todo, index) => <TodoForm todo={todo} key={index}/>)
                                        : ''
                                    }
                            </Text>
                    </ScrollView> 
                 </View>   
            </View>

    )
}

const styles = StyleSheet.create({
    viewContainer:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#0077ff'
    },
    boxContainer:{
        position:'absolute',
        height:600,
        left:20,
        right:20,
        elevation:5,
        marginTop:50,
        alignItems:'center',
        backgroundColor:'#FFF',
        borderRadius:15,
    }
})

export default DisplayScreen;

