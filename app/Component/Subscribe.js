import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';

export default function Subscribe() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                        <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/leftArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textprofile}>Subscribe</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingView}>
                    <LinearGradient style={styles.inputGrad} colors={['rgba(196, 196, 196, 0.36)', 'rgba(184, 184, 184, 0.17)',]}>
                        <Image resizeMode="cover" style={styles.crownImg} source={require('../Images/crown2.png')} />
                        <Text style={{ color: '#EE3C90', fontSize: 30, marginBottom: 14 }}>Competition</Text>
                        <Text style={{ color: '#fff', fontSize: 24, marginBottom: 16 }}>$10 Join</Text>
                        <Text style={{ color: '#fff', fontSize: 14, marginBottom: 16 }}>21 May 2020  7PM - 2PM</Text>
                    </LinearGradient>
                    <View style={{ width: '100%', marginBottom: 60 }}>
                        <Text style={{ color: '#fff', fontSize: 22, marginBottom: 16 }}>Terms & Condition</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => navigation.navigate('Payment')}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>Pay</Text>
                    </TouchableOpacity>
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
        paddingVertical: 30,
        alignItems: 'center',
    },
    inputGrad: {
        width: '94%',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    crownImg: {
        width: 96,
        height: 96
    },
    continueBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#EE3C90',
        borderRadius: 50,
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