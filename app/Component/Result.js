import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform, Dimensions } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Font from 'react-native-vector-icons/FontAwesome';


export default function Result() {
    return (
        <View style={styles.container}>
            <StatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingView}>
                    <View style={styles.tablerow}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Rank</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Name</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Points</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Match</Text>
                    </View>
                    <View style={styles.rankFooter}>
                        <Text style={styles.rankedText}>Your Ranked!</Text>
                        <View style={styles.tablerow1}>
                            <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#5</Text>
                            <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                            <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                            <View style={{ width: '25%', alignItems: 'center' }}>
                                <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#1</Text>
                        <View style={styles.firstRank}>
                            <Text style={{ color: '#fff', fontSize: 16, }}>Jhon Doe</Text>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/crown.png')} />
                        </View>

                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#2</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#3</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#4</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#5</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>



                </View>
            </ScrollView>

            {/* <View style={styles.footer}>
                <View style={styles.rankFooter}>
                    <Text style={styles.rankedText}>Your Ranked!</Text>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#5</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>
                </View>
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
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
        backgroundColor: '#040035',
        // paddingBottom: 50,
    },

    paddingView: {
        // paddingHorizontal: 20,
        // paddingVertical: 30,
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
    tablerow: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        borderBottomWidth: 1,
    },
    tablerow1: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 8,
    },
    firstRank: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    menuImg: {
        width: 20,
        height: 20,
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
    rankFooter: {
        width: '100%',
        backgroundColor: '#EE3C90',
        // marginBottom: 76,
        // position: 'absolute',
        // bottom: "100%",
        top: 0,
        left: 0,
        borderRadius: 10,
        marginTop: 6
    },
    rankedText: {
        width: '100%',
        color: '#fff',
        paddingHorizontal: 14,
        paddingTop: 8,
        fontSize: 16,
    },

});

