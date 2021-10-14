import React, { useState, useEffect, createRef, Children } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform, Modal } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Font from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/core';


export default function ConnectionRequest() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const ModalPop = ({ visible, children }) => {
        const [showModal, setShowModal] = useState(visible);
        return (
            <Modal transparent={true} animationType="fade" visible={showModal}>
                <View style={styles.modalbg}>
                    <LinearGradient style={styles.modalContainer} colors={['rgba(196, 196, 196, 0.36)', 'rgba(184, 184, 184, 0.17)']}>
                        {children}
                    </LinearGradient>
                </View>
            </Modal>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                        <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/leftArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textprofile}>Connection Request</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingView}>

                    <View style={styles.profileView} >
                        <View style={styles.nameView}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe, 25</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => setVisible(true)}>
                            <Text style={{ color: '#fff', fontSize: 18, }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileView} >
                        <View style={styles.nameView}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe, 25</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => setVisible(true)}>
                            <Text style={{ color: '#fff', fontSize: 18, }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileView} >
                        <View style={styles.nameView}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe, 25</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => setVisible(true)}>
                            <Text style={{ color: '#fff', fontSize: 18, }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileView} >
                        <View style={styles.nameView}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe, 25</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => setVisible(true)}>
                            <Text style={{ color: '#fff', fontSize: 18, }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileView} >
                        <View style={styles.nameView}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Text style={{ color: '#fff', fontSize: 20, }}>Jhon Doe, 25</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => setVisible(true)}>
                            <Text style={{ color: '#fff', fontSize: 18, }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ModalPop visible={visible}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.saveBtn}>
                            <Text style={{ color: '#fff', fontSize: 20, marginRight: 10 }}>Congratulation</Text>
                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <AntDesign name="close" color="#fff" size={22} />
                            </TouchableOpacity>

                        </View>

                        <Text style={{ color: '#fff', fontSize: 14, marginBottom: 12 }}>You are now connected!</Text>
                        <View style={[{ marginBottom: 14 }, styles.nameView]}>
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/follower.jpg')} />
                            <Image style={styles.profileImg} resizeMode={'cover'} source={require('../Images/male.jpg')} />
                        </View>
                        <TouchableOpacity style={styles.saveBtn} onPress={() => navigation.navigate('Messages')}>
                            <Text style={{ color: '#fff', fontSize: 14, marginRight: 10 }}>Starst Conversation now</Text>
                            <Font name="angle-right" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </ModalPop>

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
                        <Image resizeMode="cover" style={styles.footerImg} source={require('../Images/connection_active.png')} />
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