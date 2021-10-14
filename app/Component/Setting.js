import React, { useState, useEffect, createRef, Children } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, Switch, TouchableOpacity, TextInput, ScrollView, Platform, Modal } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/core';


export default function Setting() {
    const navigation = useNavigation();

    const [isEnable, setIsEnable] = useState(false);
    const toggleSwitch = () => setIsEnable(previousState => !previousState);
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                        <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/leftArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textprofile}>Settings</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingView}>
                    <TouchableOpacity style={styles.settingRow} onPress={() => navigation.navigate('EditProfile')}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>Edit Profile</Text>
                        <Font name="angle-right" color="#fff" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingRow} onPress={() => navigation.navigate('ChangePassword')}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>Change Password</Text>
                        <Font name="angle-right" color="#fff" size={20} />
                    </TouchableOpacity>
                    <View style={styles.settingRow}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>Activate/Deactivate</Text>
                        <Switch
                            trackColor={{ false: "grey", true: "#EE3C90" }}
                            thumbColor={isEnable ? "#fff" : "#fff"}

                            onValueChange={toggleSwitch}
                            value={isEnable}
                            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                        />
                    </View>
                    <TouchableOpacity style={styles.settingRow} onPress={() => navigation.navigate('Welcome')}>
                        <Text style={{ fontSize: 20, color: "#fff" }}>Log Out</Text>
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
        paddingVertical: 10,
        alignItems: 'center',
    },
    settingRow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 8,
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