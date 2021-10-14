import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, FlatList, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';
import DateUser from './DateUser';

export default function DifferentUser() {
    const navigation = useNavigation();
    // const Card = ({ DateUser }) => {
    //     return (
    //         <TouchableOpacity onPress={() => navigation.navigate('AnotherUser')}>
    //             <View style={{ position: 'relative', width: '100%', marginBottom: 20, }}>
    //                 <Image style={styles.dateUserImg} source={DateUser.image} />
    //                 <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
    //                     <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>
    //                         <Text style={{ color: '#fff', fontSize: 16 }} >{DateUser.name}</Text>
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
                {/* <FlatList
                    numColumns={2}
                    data={DateUser}
                    renderItem={({ item }) => <Card DateUser={item} />}
                /> */}
                <View style={styles.userRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('AnotherUser')}>
                        <View style={{ position: 'relative', width: '50%', marginRight: 10 }}>
                            <Image style={styles.dateUserImg} source={require('../Images/Rectangle.png')} />
                            <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>
                                    <Text style={{ color: '#fff', fontSize: 16 }} >Jhoasdan Doe, 25</Text>
                                </LinearGradient>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AnotherUser')}>
                        <View style={{ position: 'relative', width: '50%', marginRight: 10 }}>
                            <Image style={styles.dateUserImg} source={require('../Images/unnamed.jpg')} />
                            <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>
                                    <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe, 25</Text>
                                </LinearGradient>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.userRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('AnotherUser')}>
                        <View style={{ position: 'relative', width: '50%', marginRight: 10 }}>
                            <Image style={styles.dateUserImg} source={require('../Images/Rectangle.png')} />
                            <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>
                                    <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe, 25</Text>
                                </LinearGradient>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AnotherUser')}>
                        <View style={{ position: 'relative', width: '50%', marginRight: 10 }}>
                            <Image style={styles.dateUserImg} source={require('../Images/unnamed.jpg')} />
                            <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>
                                    <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe, 25</Text>
                                </LinearGradient>
                            </View>
                        </View>
                    </TouchableOpacity>
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
        // justifyContent: 'center',
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
        height: 50,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        position: 'absolute',
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 10,
    },
    userRow: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'center',
        width: '100%',
    },
})