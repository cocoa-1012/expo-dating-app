import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Gender from './Gender';
import Intrest from './Intrest';
import Slider from "react-native-sliders";
import { useNavigation } from '@react-navigation/core';


export default function MakeProfile() {
    const navigation = useNavigation();

    const [sliderValue, setSliderValue] = useState([0, 100]);
    const [sliderValue1, setSliderValue1] = useState(0);


    const [changeBg, setChangeBg] = useState(false);
    const [changeBg1, setChangeBg1] = useState(false);
    const [changeBg2, setChangeBg2] = useState(false);
    const [changeBg3, setChangeBg3] = useState(false);
    const [changeBg4, setChangeBg4] = useState(false);
    const [changeBg5, setChangeBg5] = useState(false);
    const [changeBg6, setChangeBg6] = useState(false);

    const onChangeHeart = () => {
        setChangeBg(!changeBg);
    };
    const onChangeHeart1 = () => {
        setChangeBg1(!changeBg1);
    };
    const onChangeHeart2 = () => {
        setChangeBg2(!changeBg2);
    };
    const onChangeHeart3 = () => {
        setChangeBg3(!changeBg3);
    };
    const onChangeHeart4 = () => {
        setChangeBg4(!changeBg4);
    };
    const onChangeHeart5 = () => {
        setChangeBg5(!changeBg5);
    };
    const onChangeHeart6 = () => {
        setChangeBg6(!changeBg6);
    };

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

    const [changeColor, setChangeColor] = useState(0);

    const ChangeGender = () => {
        return (
            <View style={styles.GenderRow} >
                {Gender.map((Gender, index) => (
                    <TouchableOpacity onPress={() => setChangeColor(index)}>
                        <LinearGradient style={[{ backgroundColor: changeColor == index ? "#EE3C90" : '' }, styles.genderBtn]} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]}>
                            <Text style={[{ color: changeColor == index ? '#fff' : '#fff' }, styles.gentertexxt]}>{Gender.name}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                ))}

            </View>
        );
    }


    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'android') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.image,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <Text style={styles.textprofile}>Make Your Profile</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.paddingView}>
                    <View style={styles.userImgView}>
                        {image && <Image source={{ uri: image }} resizeMode={'cover'} style={styles.userImg} />}

                        <TouchableOpacity style={styles.cameraBtn} activeOpacity={0.4} onPress={pickImage}>
                            <Feather name="camera" size={20} color={'#EE3C90'} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.nameText}>Name</Text>
                    <View style={{ width: '100%', marginBottom: 20 }}>
                        <LinearGradient style={styles.inputGrad} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]}>
                            <TextInput
                                style={styles.textInput}
                            />
                        </LinearGradient>

                    </View>
                    <Text style={styles.nameText}>Instagram Handle</Text>
                    <View style={{ width: '100%', marginBottom: 20 }}>
                        <LinearGradient style={styles.inputGrad} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]}>
                            <TextInput
                                style={styles.textInput}
                            />
                        </LinearGradient>

                    </View>
                    <Text style={styles.nameText}>Bio</Text>
                    <View style={{ width: '100%', marginBottom: 20 }}>
                        <LinearGradient style={styles.inputGrad1} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]}>
                            <TextInput multiline={true} style={styles.textInput1} />
                        </LinearGradient>

                    </View>
                    <View style={styles.rowText}>
                        <Text style={{ color: '#fff', fontSize: 20, }}>Enter your age</Text>
                        <View style={{ width: 100, }}>
                            <LinearGradient style={styles.inputGrad} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]}>
                                <TextInput style={styles.textInput} />
                            </LinearGradient>

                        </View>
                    </View>
                    <Text style={styles.nameText}>Gender</Text>
                    <View style={{ width: '100%', marginBottom: 20 }}>
                        <ChangeGender />
                    </View>
                    <Text style={styles.nameText}>Intersted In</Text>
                    <LinearGradient style={styles.IntresrView} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]} >
                        <Intersted />
                    </LinearGradient>


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
                    <Text style={styles.nameText}>Interest</Text>
                    <View style={styles.rowText}>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => onChangeHeart()}>
                            <View style={[{ backgroundColor: changeBg ? "#EE3C90" : 'transparent' }, styles.selectBtn]}>
                                <Text style={{ color: '#fff' }}>Reading</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => onChangeHeart1()}>
                            <View style={[{ backgroundColor: changeBg1 ? "#EE3C90" : 'transparent' }, styles.selectBtn]}>
                                <Text style={{ color: '#fff' }}>Music</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => onChangeHeart2()}>
                            <View style={[{ backgroundColor: changeBg2 ? "#EE3C90" : 'transparent' }, styles.selectBtn]}>
                                <Text style={{ color: '#fff' }}>Photo</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => onChangeHeart3()}>
                            <View style={[{ backgroundColor: changeBg3 ? "#EE3C90" : 'transparent' }, styles.selectBtn]}>
                                <Text style={{ color: '#fff' }}>Design</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowText1}>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => onChangeHeart4()}>
                            <View style={[{ backgroundColor: changeBg4 ? "#EE3C90" : 'transparent' }, styles.selectBtn]}>
                                <Text style={{ color: '#fff' }}>Video</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => onChangeHeart5()}>
                            <View style={[{ backgroundColor: changeBg5 ? "#EE3C90" : 'transparent' }, styles.selectBtn]}>
                                <Text style={{ color: '#fff' }}>UI/UX</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.4} onPress={() => onChangeHeart6()}>
                            <View style={[{ backgroundColor: changeBg6 ? "#EE3C90" : 'transparent' }, styles.selectBtn]}>
                                <Text style={{ color: '#fff' }}>Game</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} onPress={() => navigation.navigate('Home')} >
                        <Text style={{ color: '#fff', fontSize: 18 }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View >
    );
}

const styles = StyleSheet.create({
    SliderContainer: {
        width: '100%',
        marginBottom: 20,
    },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#040035',
    },
    header: {
        width: '100%',
        height: 60,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textprofile: {
        color: '#fff',
        fontSize: 22,
    },
    paddingView: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center'
    },
    userImgView: {
        position: 'relative',
        borderWidth: 1,
        borderColor: '#EE3C90',
        width: 72,
        height: 72,
        borderRadius: 72,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 40,
    },
    userImg: {
        width: 70,
        height: 70,
        borderRadius: 70,
    },
    cameraBtn: {
        position: 'absolute',
        bottom: -2,
        right: -10,
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'left',
        width: '100%',
        marginBottom: 20,
    },
    inputGrad: {
        width: '100%',
        height: 45,
        borderRadius: 14,
    },
    inputGrad1: {
        width: '100%',
        height: 65,
        borderRadius: 14,
    },
    textInput: {
        width: '100%',
        height: 45,
        color: '#fff',
        paddingHorizontal: 14,
        fontSize: 14
    },
    textInput1: {
        width: '100%',
        color: '#fff',
        paddingHorizontal: 14,
        fontSize: 14,
    },
    rowText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
    },
    rowText1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        flexDirection: 'row',
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
    IntresrView: {
        color: '#fff',
        borderRadius: 20,
        width: '100%',
        marginBottom: 20,
    },
    selectBtn: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FF5A79'
    },
    continueBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#EE3C90',
        borderRadius: 50,
    },

});