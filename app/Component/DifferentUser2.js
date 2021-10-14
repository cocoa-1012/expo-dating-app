import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, FlatList, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/core';
import DateUser from './DateUser';

export default function DifferentUser2() {
    const navigation = useNavigation();
    // const Card = ({ DateUser }) => {
    //     return (
    //         <TouchableOpacity onPress={() => navigation.navigate('AnotherUser')}>
    //             <View style={{ position: 'relative', width: 150, }}>
    //                 <Image style={styles.dateUserImg} source={require('../Images/Rectangle.png')} />
    //                 <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
    //                     <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>

    //                         <View style={{ width: "70%" }}>
    //                             <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe, 25</Text>
    //                             <Text style={{ color: '#fff', fontSize: 10 }} >Star Bar 2 min ago</Text>
    //                         </View>
    //                         <Text style={{ color: '#fff', fontSize: 13 }} >1 KM</Text>
    //                     </LinearGradient>
    //                 </View>
    //             </View>
    //         </TouchableOpacity>

    //     );
    // }

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.paddingView}>
                <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn1} >
                    <Text style={{ color: '#fff', fontSize: 18 }}>Star Bar</Text>
                    <Fontisto name="close" size={16} color="#fff" />
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>

                    <View style={styles.userRow}>
                        <TouchableOpacity onPress={() => navigation.navigate('AnotherUser')}>
                            <View style={{ position: 'relative', width: '50%', marginRight: 10 }}>
                                <Image style={styles.dateUserImg} source={require('../Images/Rectangle.png')} />
                                <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                    <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>

                                        <View style={{ width: "70%" }}>
                                            <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe, 25</Text>
                                            <Text style={{ color: '#fff', fontSize: 10 }} >Star Bar 2 min ago</Text>
                                        </View>
                                        <Text style={{ color: '#fff', fontSize: 13 }} >1 KM</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AnotherUser')}>
                            <View style={{ position: 'relative',  width: '50%', marginRight: 10 }}>
                                <Image style={styles.dateUserImg} source={require('../Images/Rectangle.png')} />
                                <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                    <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>

                                        <View style={{ width: "70%" }}>
                                            <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe, 25</Text>
                                            <Text style={{ color: '#fff', fontSize: 10 }} >Star Bar 2 min ago</Text>
                                        </View>
                                        <Text style={{ color: '#fff', fontSize: 13 }} >1 KM</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userRow}>
                        <TouchableOpacity onPress={() => navigation.navigate('AnotherUser')}>
                            <View style={{ position: 'relative',  width: '50%', marginRight: 10 }}>
                                <Image style={styles.dateUserImg} source={require('../Images/Rectangle.png')} />
                                <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                    <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>

                                        <View style={{ width: "70%" }}>
                                            <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe, 25</Text>
                                            <Text style={{ color: '#fff', fontSize: 10 }} >Star Bar 2 min ago</Text>
                                        </View>
                                        <Text style={{ color: '#fff', fontSize: 13 }} >1 KM</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AnotherUser')}>
                            <View style={{ position: 'relative',  width: '50%', marginRight: 10 }}>
                                <Image style={styles.dateUserImg} source={require('../Images/Rectangle.png')} />
                                <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                    <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>

                                        <View style={{ width: "70%" }}>
                                            <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe, 25</Text>
                                            <Text style={{ color: '#fff', fontSize: 10 }} >Star Bar 2 min ago</Text>
                                        </View>
                                        <Text style={{ color: '#fff', fontSize: 13 }} >1 KM</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#040035',
        alignItems: 'center',
        paddingTop: 20,
    },
    dateUserImg: {
        width: 150,
        height: 220,
        borderRadius: 15,
        // marginRight: 10,
    },
    userText: {
        width: 150,
        // height: 50,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        position: 'absolute',
        bottom: 0,
        left: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    continueBtn1: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#EE3C90',
        borderRadius: 50,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
    },
    userRow: {
        flexDirection: 'row',
        marginBottom: 20,
        width: '100%',
        justifyContent: 'center',
    },
})