import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Font from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';

export default function JoinPage() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                        <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/leftArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textprofile}>Competition</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingView}>
                    <View style={styles.borderBottom}>
                        <Image resizeMode="cover" style={styles.competitionImg} source={require('../Images/competition.png')} />
                        <Image resizeMode="cover" style={styles.crownImg} source={require('../Images/crown2.png')} />
                        <Text style={{ color: '#EE3C90', fontSize: 30, marginBottom: 4 }}>Win Now</Text>
                        <Text style={{ color: '#fff', fontSize: 34, marginBottom: 4 }}>$100</Text>
                        <Text style={{ color: '#EE3C90', fontSize: 20, marginBottom: 0, textAlign: 'center' }}>To join the Compitiotion </Text>
                        <Text style={{ color: '#EE3C90', fontSize: 20, marginBottom: 14, textAlign: 'center' }}>Please go and get subscribe</Text>
                    </View>
                    <View style={styles.textterRow}>
                        <Text style={{ color: '#fff', fontSize: 18, }}>21 May 2020</Text>
                        <Text style={{ color: '#fff', fontSize: 18, }}>7PM - 2PM</Text>
                    </View>
                    <View style={styles.JoinRow}>
                        <Text style={{ color: '#fff', fontSize: 20, }}>Women Play For Free</Text>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => navigation.navigate('Competition')}>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Join Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.JoinRow}>
                        <Text style={{ color: '#fff', fontSize: 20, }}>Men $10 to Join</Text>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => navigation.navigate('Subscribe')}>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Pay Now</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#EE3C90', fontSize: 20, marginBottom: 20, textAlign: 'center' }}>Your cash award depends on your ranking at end of night </Text>

                    <View style={styles.genderView}>
                        <View style={styles.maleView}>
                            <Text style={styles.oneK}>1K</Text>
                            <Text style={styles.genderText}>women contestants</Text>
                        </View>
                        <View style={styles.maleView}>
                            <Text style={styles.oneK}>1K</Text>
                            <Text style={styles.genderText}>women contestants</Text>
                        </View>
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
        // paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: 'center',
    },
    crownImg: {
        width: 96,
        height: 96
    },
    borderBottom: {
        width: '100%',
        alignItems: 'center',
    },
    competitionImg: {
        width: '100%',
        height: 140,
    },
    textterRow: {
        backgroundColor: '#EE3C90',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingVertical: 10,
        marginBottom: 24,
    },
    JoinRow: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    genderView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 20,
        paddingHorizontal: 10,
    },
    maleView: {
        alignItems: 'center',
        width: '50%',
    },
    oneK: {
        fontSize: 30,
        color: '#fff',
    },
    genderText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    continueBtn: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        backgroundColor: '#EE3C90',
        borderRadius: 50,
        // marginBottom: 20,
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

