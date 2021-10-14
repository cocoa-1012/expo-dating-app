import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, Platform, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Font from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/core';

export default function DrawerPage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <StatusBar />
            <View style={styles.header}>
                <Image resizeMode="contain" style={styles.userImg} source={require('../Images/user.jpg')} />
                <View>
                    <Text style={{ fontSize: 26, color: '#fff', fontWeight: 'bold' }}>Jhon Doe</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Text style={{ color: '#fff', fontSize: 14 }}>View Profile</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <LinearGradient colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>
                        <TouchableOpacity style={styles.IconView} onPress={() => navigation.navigate('Home')}>
                            <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/home.png')} />
                            <Text style={styles.drawerTextView}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconView} onPress={() => navigation.navigate('ConnectionRequest')} >
                            <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/connect.png')} />
                            <Text style={styles.drawerTextView} >My Connections</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconView} onPress={() => navigation.navigate('SearchNearMe')}>
                            <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/glass.png')} />
                            <Text style={styles.drawerTextView}>Search For Contestants</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconView} onPress={() => navigation.navigate('JoinPage')}>
                            <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/join.png')} />
                            <Text style={styles.drawerTextView}>Join Now </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconView} onPress={() => navigation.navigate('Competition')}>
                            <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/crown.png')} />
                            <Text style={styles.drawerTextView}>Competition</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconView} onPress={() => navigation.navigate('QRCode')}>
                            <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/scan.png')} />
                            <Text style={styles.drawerTextView}>Scan Code</Text>
                        </TouchableOpacity>
                       
                        <TouchableOpacity style={styles.IconView} onPress={() => navigation.navigate('Messages')}>
                            <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/message-circle.png')} />
                            <Text style={styles.drawerTextView}>Chats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconView} onPress={() => navigation.navigate('UpdateMyVenue')}>
                            <Feather name="map-pin" size={20} color="#fff" />
                            <Text style={styles.drawerTextView}>Update My Venue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconView} onPress={() => navigation.navigate('MyAccount')}>
                            <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/account.png')} />
                            <Text style={styles.drawerTextView}>My Account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconView} onPress={() => navigation.navigate('Setting')}>
                            <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/setting.png')} />
                            <Text style={styles.drawerTextView}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.IconView} onPress={() => navigation.navigate('Welcome')}>
                            <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/logout.png')} />
                            <Text style={styles.drawerTextView}>Log Out</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#040035',
    },
    header: {
        width: '100%',
        height: 150,
        paddingHorizontal: 40,
        paddingVertical: 12,
        backgroundColor: '#EE3C90',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    userImg: {
        width: 70,
        height: 70,
        borderRadius: 70,
        marginRight: 20,
    },
    IconView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 14,
    },
    drawerTextView: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        width: '80%',
        textAlign: 'left',
    },

})