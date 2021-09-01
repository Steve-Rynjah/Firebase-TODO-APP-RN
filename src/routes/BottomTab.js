import React,{useState} from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    Image, 
} from 'react-native'

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CreateScreen from '../screens/Create';
import DisplayScreen from '../screens/Display';


const BottomTab = () =>{
    const onToggleSwitch = () => setIsDark(!isDark)

    const Tab = createBottomTabNavigator();
          return(
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions={{
                        showLabel: false,
                        style : styles.bottomTab
                    }}>
                    <Tab.Screen name="CREATE" component={CreateScreen} 
                        options={{
                            tabBarIcon:({focused})=>(
                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                    <Image source={require('../images/add.png')}
                                        resizeMode='contain'
                                        style={{
                                            width:30,
                                            height:30,
                                            tintColor: focused ? '#0077ff' : '#748c94'
                                        }}
                                    />
                                    <Text style={{
                                        fontSize:13,
                                        color: focused ? '#0077ff' : '#748c94'
                                    }}>CREATE</Text>
                                </View>
                            )
                        }}
                    />
                    <Tab.Screen name="DISPLAY" component={DisplayScreen} 
                        options={{
                            tabBarIcon:({focused})=>(
                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                    <Image source={require('../images/menu.png')}
                                        resizeMode='contain'
                                        style={{
                                            width:30,
                                            height:30,
                                            tintColor: focused ? '#0077ff' : '#748c94'
                                        }}
                                    />
                                    <Text style={{
                                        fontSize:13,
                                        color: focused ? '#0077ff' : '#748c94'
                                    }}>DISPLAY</Text>
                                </View>
                            )
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
}

const styles = StyleSheet.create({
    bottomTab:{
        position:'absolute',
        bottom:25,
        left:20,
        right:20,
        elevation:5,
        backgroundColor:'#FFF',
        borderRadius:15,
        height:90,
        shadowColor: '#7F5DF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5, 
    }
})

export default BottomTab;