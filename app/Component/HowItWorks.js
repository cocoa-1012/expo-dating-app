import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Font from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';

export default function HowItWorks() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                        <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/leftArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textprofile}>How it Works?</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingView}>
                    <Text style={{ color: '#EE3C90', fontSize: 22, marginBottom: 20, textAlign: 'center' }}>Grow  your social connection in
Real Life</Text>
                    <Image resizeMode="cover" style={styles.crownImg} source={require('../Images/image.png')} />
                    <Text style={{ color: '#EE3C90', fontSize: 22, marginBottom: 20, textAlign: 'center' }}>Play Hide & Seek To Win Cash Prizes</Text>
                    <View style={styles.noteView}>
                        <Font name="circle" size={8} color="#fff" />
                        <Text style={{ width: '90%', color: '#fff', fontSize: 14, }}>Sign Up for a competiotion. girls play for free</Text>
                    </View>
                    <View style={styles.noteView}>
                        <Font name="circle" size={8} color="#fff" />
                        <Text style={{ width: '90%', color: '#fff', fontSize: 14, }}>Locate other contestants in close proximity to you</Text>
                    </View>
                    <View style={styles.noteView}>
                        <Font name="circle" size={8} color="#fff" />
                        <Text style={{ width: '90%', color: '#fff', fontSize: 14, }}>Search by venue name, look for the person with matching photo
       in a veneu</Text>
                    </View>
                    <View style={styles.noteView}>
                        <Font name="circle" size={8} color="#fff" />
                        <Text style={{ width: '90%', color: '#fff', fontSize: 14, }}>Ask to scan their QR code to increase both of your score </Text>
                    </View>
                    <View style={styles.noteView}>
                        <Font name="circle" size={8} color="#fff" />
                        <Text style={{ width: '90%', color: '#fff', fontSize: 14, }}>This is noe a confirmed connection, quickly introduce yourself
       and move on </Text>
                    </View>
                    <View style={styles.noteView}>
                        <Font name="circle" size={8} color="#fff" />
                        <Text style={{ width: '90%', color: '#fff', fontSize: 14, }}>Connect with as many people as possible </Text>
                    </View>
                    <View style={styles.noteView}>
                        <Font name="circle" size={8} color="#fff" />
                        <Text style={{ width: '90%', color: '#fff', fontSize: 14, }}>Cash Award at end of night is distrubuted according to final score</Text>
                    </View>
                    <View style={styles.noteView}>
                        <Font name="circle" size={8} color="#fff" />
                        <Text style={{ width: '90%', color: '#fff', fontSize: 14, }}>Make your new connection official by matching with them the
       next day</Text>
                    </View>
                    <View style={styles.noteView}>
                        <Font name="circle" size={8} color="#fff" />
                        <Text style={{ width: '90%', color: '#fff', fontSize: 14, }}>Increase the size of your group next time you are out</Text>
                    </View>
                    <View style={styles.noteView}>
                        <Font name="circle" size={8} color="#fff" />
                        <Text style={{ width: '90%', color: '#fff', fontSize: 14, }}>Grow your social status by growing your real life connections</Text>
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
        paddingVertical: 30,
        alignItems: 'center',
    },
    crownImg: {
        width: 220,
        height: 150,
        borderRadius: 6,
        marginBottom: 10,
    },
    noteView: {
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    continueBtn: {
        paddingHorizontal: 20,
        paddingVertical: 6,
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