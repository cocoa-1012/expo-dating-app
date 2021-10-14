import React, { useState, useEffect, createRef, Children } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform, Modal } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';

export default function Messages() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                        <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/leftArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textprofile}>Messages</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingView}>
                    <LinearGradient style={styles.inputGrad} colors={['rgba(196, 196, 196, 0.36)', 'rgba(184, 184, 184, 0.17)',]}>
                        <TextInput placeholder="Search By name" placeholderTextColor="rgba(255, 255, 255, 0.43)" style={styles.textInput} />
                        <Feather name="search" size={20} color="#fff" />
                    </LinearGradient>
                    <TouchableOpacity style={styles.chatView} onPress={() => navigation.navigate('Chat')}>
                        <View style={{ position: 'relative' }}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Icon style={styles.dotView} name="circle" size={12} color="#009F49" />
                        </View>
                        <View style={styles.chatView1}>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe</Text>
                                <Text style={{ color: '#fff', fontSize: 12, }}>Hi</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 14, }}>9.27</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatView} onPress={() => navigation.navigate('Chat')}>
                        <View style={{ position: 'relative' }}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/user.jpg')} />
                            <Icon style={styles.dotView} name="circle" size={12} color="#009F49" />
                        </View>
                        <View style={styles.chatView1}>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe</Text>
                                <Text style={{ color: '#fff', fontSize: 12, }}>Hi</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 14, }}>9.27</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatView} onPress={() => navigation.navigate('Chat')}>
                        <View style={{ position: 'relative' }}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/male.jpg')} />
                            <Icon style={styles.dotView} name="circle" size={12} color="#D02702" />
                        </View>
                        <View style={styles.chatView1}>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe</Text>
                                <Text style={{ color: '#fff', fontSize: 12, }}>Hi</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 14, }}>9.27</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                </View>
            </ScrollView>
            {/* <View style={styles.footer}>
                <LinearGradient style={styles.fotterView} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/home.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                        <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/message-circle_activate.png')} />
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
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#040035',
        // paddingBottom: 70,
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
    inputGrad: {
        width: '80%',
        height: 45,
        borderRadius: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        marginBottom: 20,
    },
    textInput: {
        width: '80%',
        height: 45,
        color: '#fff',
        paddingHorizontal: 14,
        fontSize: 14
    },
    profileImg: {
        width: 42,
        height: 42,
        borderRadius: 42,
        borderColor: '#EE3C90',
        borderWidth: 1.5,
        marginRight: 14,
    },
    chatView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    chatView1: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        paddingVertical: 10,
    },
    dotView: {
        position: 'absolute',
        bottom: 0,
        right: 14,
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
});