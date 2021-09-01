import React from 'react';
import {
    Button, 
    Text, 
    View, 
    StyleSheet
} from 'react-native';

import API_URLS from '../service/apiURL'
import firebase from '../util/Firebase'

const TodoForm = ({todo}) =>{
    const dbRef = firebase.database().ref(API_URLS.TODO_LIST.ADD).child(todo.id);

    const completeTodo = () =>{
        const todoRef = dbRef;
        todoRef.update({
            complete: !todo.complete
        })
    }

    const deleteTodo = () =>{
        const todoRef = dbRef;
        todoRef.remove();
    }

    return(
        <View style={{flex:1}}>
            <Text style={styles.textStyle}> {todo.title}</Text>
                <View style={{
                    width:'100%',
                    height:'100%',
                    flexDirection:'row',
                    marginTop:25,
                    justifyContent:'space-between',
                }}>
                    <View style={{marginLeft:15}}>
                        <Button title="D E L E T E" onPress={deleteTodo} color='#f72f2f'/>
                    </View>
                    
                    <View style={{marginLeft:15}}>
                        <Button title="C O M P L E T E" onPress={completeTodo} color='#00ff1a'/>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:15,
        fontWeight:'bold',
        color:'#0077ff'
    }
})

export default TodoForm;