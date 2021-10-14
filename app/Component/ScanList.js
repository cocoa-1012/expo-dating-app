import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Font from 'react-native-vector-icons/FontAwesome';


export default function ScanList() {
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

                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#21</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#21</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#21</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#21</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#21</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#21</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>
                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#21</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>

                    <View style={styles.tablerow1}>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>#21</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>Jhon Doe</Text>
                        <Text style={{ width: '25%', color: '#fff', fontSize: 16, textAlign: 'center' }}>70</Text>
                        <View style={{ width: '25%', alignItems: 'center' }}>
                            <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/connect.png')} />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
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

    menuImg: {
        width: 20,
        height: 20,
    },
});

