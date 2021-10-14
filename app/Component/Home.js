import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import Font from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/core';


export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={styles.menuImg} source={require('../Images/Vector.png')} />
                </TouchableOpacity>
                <Text style={styles.textprofile}>Hide & Seek</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Competition')}>
                    <Image style={{ width: 28, height: 28 }} source={require('../Images/crown.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingView}>
                    <View style={styles.rowView}>
                        <Feather name="map-pin" size={20} color="#fff" />
                        <Text style={{ fontSize: 20, color: '#fff', marginLeft: 10 }} >Star Bar</Text>
                    </View>
                    <Image style={styles.userImag} source={require('../Images/user.jpg')} />
                    <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Profile')}>
                        <Text style={{ fontSize: 22, color: '#fff', marginRight: 10, }}>Jhon Doe, 25</Text>
                        <Font name="angle-right" size={25} color="#fff" />
                    </TouchableOpacity>

                    <View style={styles.kRow}>
                        <Image resizeMode="cover" style={styles.connectImg} source={require('../Images/connect.png')} />
                        <Text style={{ fontSize: 20, color: '#fff', marginLeft: 10 }} >2.8k</Text>
                    </View>
                    <Text style={{ fontSize: 18, color: '#fff', marginBottom: 40 }}>Total Connection</Text>

                    <View style={styles.btnRow}>
                        <TouchableOpacity style={styles.bgButton} onPress={() => navigation.navigate('Setting')}>
                            <Image resizeMode="cover" style={styles.connectImg} source={require('../Images/setting.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bgButton} onPress={() => navigation.navigate('EditProfile')}>
                            <Image resizeMode="cover" style={styles.connectImg} source={require('../Images/pen.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bgButton} onPress={() => navigation.navigate('QRCode')}>
                            <Image resizeMode="cover" style={styles.connectImg} source={require('../Images/qrCode.png')} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => navigation.navigate('HowItWorks')}>
                        <Text style={{ color: '#fff', fontSize: 16, }}>How it Works?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <LinearGradient style={styles.fotterView} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/home_active.png')} />
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
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    textprofile: {
        color: '#fff',
        fontSize: 22,
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
    rowView: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 8,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        marginBottom: 20,
    },
    userImag: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#EE3C90',
        marginBottom: 20,
    },
    connectImg: {
        width: 26,
        height: 26,
    },
    kRow: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    btnRow: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 10,
    },
    bgButton: {
        backgroundColor: '#EE3C90',
        width: 40,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    continueBtn: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: '#EE3C90',
        borderRadius: 8,
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
    },
});