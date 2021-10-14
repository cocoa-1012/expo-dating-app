
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import TopTabNavigator2 from './TopTabNavigator2';
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import Intrest from './Intrest';
import Slider from "react-native-sliders";
import { useNavigation } from '@react-navigation/core';

export default function SearchNearMe2() {
    const navigation = useNavigation();
    const [selectIntrest, setSelectIntrest] = useState(0);

    const Intersted = () => {
        return (
            <View style={styles.GenderRow}>
                {Intrest.map((Intrest, index) => (
                    <TouchableOpacity onPress={() => setSelectIntrest(index)}>
                        <View style={[{ backgroundColor: selectIntrest == index ? "#EE3C90" : "" }, styles.genderBtn]}>
                            <Text style={[{ color: selectIntrest == index ? "#FFF" : "#fff" }, styles.gentertexxt]}>{Intrest.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }

    const [sliderValue1, setSliderValue1] = useState(0);
    const [sliderValue, setSliderValue] = useState([0, 100]);

    const bs = React.createRef();
    const fall = new Animated.Value(1);

    const renderHeader = () => (
        <View style={styles.headerPanel}>
            <View style={styles.panelcenter}></View>
        </View>
    );

    const renderInner = () => (
        <LinearGradient colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]}
            style={{
                height: 280,
                width: "100%",
                paddingHorizontal: 16,
                paddingVertical: 18,
                backgroundColor: 'rgba(255,255,255, 0.2)',

            }}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.AnimatedRow}>
                    <Text style={styles.headerText}>Preferences</Text>
                    <TouchableOpacity style={{ width: '30%', }} onPress={() => bs.current.snapTo(1)}>
                        <Text style={{ fontSize: 14, color: '#fff', textAlign: 'right' }}>Clear</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.nameText}>Intersted In</Text>
                <LinearGradient style={styles.IntresrView} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]} >
                    <Intersted />
                </LinearGradient>
                <Text style={styles.nameText}>Set your Current Location</Text>
                <LinearGradient style={styles.inputGrad1} colors={['rgba(196, 196, 196, 0.36)', 'rgba(184, 184, 184, 0.17)',]}>
                    <Feather name="map-pin" size={20} color="#fff" />
                    <TextInput style={styles.textInput} />
                </LinearGradient>
                <View style={styles.SliderContainer}>
                    <View style={styles.rowText}>
                        <Text style={{ color: '#fff', fontSize: 20, }}>
                            Distance
                            </Text>
                        <Text style={{ color: '#fff', fontSize: 20, }}> {sliderValue1}km </Text>
                    </View>


                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        minimumTrackTintColor="#EE3C90"
                        maximumTrackTintColor="#fff"
                        thumbTintColor={'#EE3C90'}
                        thumbStyle={{ width: 20, height: 20, borderRadius: 20 }}
                        step={1}
                        value={sliderValue1}
                        onValueChange={
                            (sliderValue1) => setSliderValue1(sliderValue1)
                        }
                    />
                </View>
                <View style={styles.SliderContainer}>
                    <View style={styles.rowText}>
                        <Text style={{ color: '#fff', fontSize: 20, }}>
                            Age
                            </Text>
                        <Text style={{ color: '#fff', fontSize: 20, }}> {sliderValue} </Text>
                    </View>


                    <Slider
                        maximumValue={100}
                        minimumValue={0}
                        minimumTrackTintColor="#EE3C90"
                        maximumTrackTintColor="#fff"
                        thumbTintColor={'#EE3C90'}
                        thumbStyle={{ width: 20, height: 20, borderRadius: 20 }}
                        step={1}
                        value={sliderValue}
                        onValueChange={
                            (sliderValue) => setSliderValue(sliderValue)
                        }
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn1} >
                        <Text style={{ color: '#fff', fontSize: 18 }}>Continue</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </LinearGradient>
    )
    return (
        <View style={styles.container}>
            <StatusBar />
            <BottomSheet
                ref={bs}
                snapPoints={[280, -70]}
                initialSnap={1}
                renderContent={renderInner}
                renderHeader={renderHeader}
                callbackNode={fall}
                borderRadius={10}
                enabledGestureInteraction={false}
            />
            <Animated.View
                style={{
                    height: "100%",
                    opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
                }}>
                <View style={styles.header}>
                    <View style={styles.headerRow}>
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                                <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/leftArrow.png')} />
                            </TouchableOpacity>
                            <Text style={styles.textprofile}>Search Near Me</Text>
                        </View>
                        <View style={styles.row}>
                            <LinearGradient style={styles.inputGrad} colors={['rgba(196, 196, 196, 0.36)', 'rgba(184, 184, 184, 0.17)',]}>
                                <TextInput placeholder="Search By name" placeholderTextColor="rgba(255, 255, 255, 0.43)" style={styles.textInput} />
                                <Feather name="search" size={20} color="#fff" />
                            </LinearGradient>
                            <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => bs.current.snapTo(0)} >
                                <Text style={{ color: '#fff', fontSize: 18 }}>Preferences</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.paddingView}>

                        <View style={styles.coder}>
                            <TopTabNavigator2 />

                        </View>
                    </View>
                </ScrollView>

            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#040035',
        // marginBottom: 70,
    },
    header: {
        width: '100%',
        height: 60,
        paddingHorizontal: 20,
        marginBottom: 40,
    },
    headerRow: {
        width: '100%',
        // height: 60,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    row: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
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
    continueBtn: {
        width: '36%',
        height: 34,
        backgroundColor: '#EE3C90',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputGrad: {
        width: '60%',
        height: 45,
        borderRadius: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    inputGrad1: {
        width: '100%',
        height: 45,
        borderRadius: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        marginBottom: 20,
    },
    textInput: {
        width: '90%',
        height: 45,
        color: '#fff',
        paddingHorizontal: 14,
        fontSize: 14
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
    AnimatedRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        width: '100%'

    },
    headerText: {
        fontSize: 26,
        fontWeight: "bold",
        color: '#EE3C90',
        width: '70%',
        textAlign: 'right',
    },
    nameText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'left',
        width: '100%',
        marginBottom: 20,
    },
    IntresrView: {
        color: '#fff',
        borderRadius: 20,
        width: '100%',
        marginBottom: 20,
    },
    SliderContainer: {
        width: '100%',
        marginBottom: 20,
    },
    genderBtn: {
        paddingHorizontal: 30,
        paddingVertical: 14,
        borderRadius: 20,
        width: '100%'
    },
    GenderRow: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
    },
    gentertexxt: {
        fontSize: 18,
    },
    rowText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
    },
    continueBtn1: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#EE3C90',
        borderRadius: 50,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    coder: {
        width: "100%",
        // justifyContent: 'center',
        height: '100%',
    },

})