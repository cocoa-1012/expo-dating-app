import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Font from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';

export default function MyAccount() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                        <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/leftArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textprofile}>My Account</Text>
                    <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => navigation.navigate('Withdraw')} >
                        <Text style={{ color: '#fff', fontSize: 18 }}>Withdraw</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingView}>
                    <View style={styles.borderBottom}>
                        <Text style={{ color: '#fff', fontSize: 30, marginBottom: 10 }}>Winning Price</Text>
                        <Text style={{ color: '#fff', fontSize: 30, marginBottom: 10 }}>$500</Text>
                    </View>
                    <View style={styles.tablerow}>
                        <Text style={{ width: '20%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Rank</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>All Compitition</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Winning Amount</Text>

                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '20%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#1</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>21 May 2020</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>$50</Text>

                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '20%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#1</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>21 May 2020</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>$50</Text>

                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '20%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#1</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>21 May 2020</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>$50</Text>

                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '20%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#1</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>21 May 2020</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>$50</Text>

                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '20%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#1</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>21 May 2020</Text>
                        <Text style={{ width: '40%', color: '#fff', fontSize: 16, textAlign: 'center' }}>$50</Text>

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
        // width: '80%',
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
    crownImg: {
        width: 96,
        height: 96
    },
    borderBottom: {
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        borderBottomWidth: 1,
        width: '100%',
        alignItems: 'center',
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
    continueBtn: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        backgroundColor: '#EE3C90',
        borderRadius: 50,
    },
    tablerow1: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 8,
    },
    tablerow: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        borderBottomWidth: 1,
    },
});

