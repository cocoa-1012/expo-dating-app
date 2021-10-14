import React, { useState, useEffect, createRef, Children } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform, Modal } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Font from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/core';


export default function ConnectedWith() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                        <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/leftArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textprofile}>You Connected With</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingView}>

                    <View style={styles.profileView} >
                        <View style={styles.nameView}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe, 25</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => navigation.navigate('Chat')} >
                            <Text style={{ color: '#fff', fontSize: 18, }}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileView} >
                        <View style={styles.nameView}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe, 25</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => navigation.navigate('Chat')}>
                            <Text style={{ color: '#fff', fontSize: 18, }}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileView} >
                        <View style={styles.nameView}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe, 25</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => navigation.navigate('Chat')}>
                            <Text style={{ color: '#fff', fontSize: 18, }}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileView} >
                        <View style={styles.nameView}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe, 25</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => navigation.navigate('Chat')}>
                            <Text style={{ color: '#fff', fontSize: 18, }}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileView} >
                        <View style={styles.nameView}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe, 25</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => navigation.navigate('Chat')}>
                            <Text style={{ color: '#fff', fontSize: 18, }}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
            <View style={styles.footer}>
                <LinearGradient style={styles.fotterView} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/home.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                        <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/message-circle.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Scaner')}>
                        <LinearGradient style={styles.scanBtn} colors={['rgba(196, 196, 196, 0.43)', 'rgba(196, 196, 196, 0)']}>
                            <View style={styles.justBorder}>
                                <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/scan.png')} />
                            </View>

                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SearchNearMe')}>
                        <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/glass.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ConnectionRequest')}>
                        <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/connect.png')} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#040035',
        paddingBottom: 70,
    },
    header: {
        width: '100%',
        height: 60,
        paddingHorizontal: 20,
    },
    headerRow: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
    },
    arrowBtn: {
        width: 34,
        height: 34,
        backgroundColor: '#fff',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textprofile: {
        color: '#fff',
        fontSize: 22,
        width: '80%',
    },
    menuImg: {
        width: 20,
        height: 20,
    },
    paddingView: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    profileView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    profileImg: {
        width: 42,
        height: 42,
        borderRadius: 42,
        borderColor: '#EE3C90',
        borderWidth: 1.5,
        marginRight: 10,
    },
    continueBtn: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        backgroundColor: '#EE3C90',
        borderRadius: 50,
    },
    nameView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    fotterView: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    footerImg: {
        width: 30,
        height: 30,
    },
    scanBtn: {
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 70,
    },
    justBorder: {
        width: 70,
        height: 70,
        borderColor: '#EE3C90',
        borderWidth: 2,
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalbg: {
        flex: 1,
        // width: '64%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '65%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 4,
    },
    saveBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        width: '100%',
        justifyContent: 'center'
    },
});