import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform, ImageBackground, Dimensions } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Font from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { useNavigation } from '@react-navigation/core';

export default function Profile() {
    const navigation = useNavigation();

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

    const [image1, setImage1] = useState(null);
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

    const pickImage1 = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.image1,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage1(result.uri);
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>

                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                        <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/leftArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textprofile}>Profile</Text>
                    <TouchableOpacity style={styles.bgButton} onPress={() => navigation.navigate('Setting')}>
                        <Image resizeMode="cover" style={styles.connectImg} source={require('../Images/settings_activate.png')} />
                    </TouchableOpacity>
                </View>

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageView}>
                    {image && <Image resizeMode="cover" style={styles.profileImg} source={{ uri: image }} />}
                    <TouchableOpacity style={styles.cameraBtn} onPress={pickImage}>
                        <Feather name="camera" size={20} color={'#EE3C90'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.paddingView}>


                    <View style={styles.connectView1}>
                        <Text style={{ fontSize: 30, color: '#fff', marginRight: 10 }}>Lina Doe</Text>
                        <Image resizeMode="cover" style={styles.codeImg} source={require('../Images/qrCode.png')} />
                    </View>



                    <View style={styles.scanNameView}>

                        <View style={styles.connectView}>
                            <Text style={{ fontSize: 14, color: '#fff', marginRight: 10, textAlign: 'center' }}>Age, 25</Text>
                            <View style={{ flexDirection: 'row', width: '60%' }}>
                                <Feather name="map-pin" size={20} color={'#fff'} />
                                <Text style={{ fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 4 }}>Star Bar</Text>
                            </View>
                        </View>
                        <View style={styles.connectView2}>
                            <View style={styles.connectView}>
                                <Image resizeMode="cover" style={styles.codeImg} source={require('../Images/connect.png')} />
                                <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center' }}>2.8k</Text>
                            </View>
                            <View >
                                <Text style={{ fontSize: 16, color: '#fff', marginRight: 10, textAlign: 'center' }}>Total Connection</Text>
                            </View>
                        </View>

                    </View>
                    <Text style={styles.nameText}>Bio</Text>
                    <Text style={styles.loremtext}>“Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Scelerisque nibh maecenas non dolor lorem.
                    Molestie sed eget in donec tellus tortor quis.”
                    </Text>
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
                    <Text style={styles.nameText}>Photo</Text>
                    <View style={styles.uploadRow}>
                        <LinearGradient style={styles.uplodBtn} colors={['rgba(196, 196, 196, 0.31)', 'rgba(196, 196, 196, 0.11)',]}>
                            <TouchableOpacity onPress={pickImage1}>
                                <Feather name="plus-circle" size={40} color={'#EE3C90'} />
                            </TouchableOpacity>
                            <Text style={styles.uploadText}>Upload Your Photos</Text>
                        </LinearGradient>
                        <View style={styles.uplodBtn1}>
                            {image1 && <Image resizeMode="cover" style={styles.anotherUplodImg} source={{ uri: image1 }} />}
                        </View>
                    </View>
                    <View style={styles.uploadRow}>
                        <Text style={{ width: '60%', fontSize: 24, color: '#fff' }}>You Connected With</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ConnectedWith')}>
                            <Text style={{ fontSize: 13, color: '#EE3C90' }}>View All</Text>
                        </TouchableOpacity>

                    </View>


                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.uploadRow}>

                            <TouchableOpacity style={styles.ImagePosition} >
                                <Image resizeMode="cover" style={styles.anotherUplodImg} source={require('../Images/follower.jpg')} />
                                <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                    <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>
                                        <View style={{ width: "100%" }}>
                                            <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe</Text>
                                        </View>
                                        {/* <View style={{ width: "34%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Image resizeMode="cover" style={styles.heartImg} source={require('../Images/connect.png')} />
                                            <Image resizeMode="cover" style={styles.heartImg} source={require('../Images/sms.png')} />
                                        </View> */}

                                    </LinearGradient>
                                </View>
                                <Image resizeMode="cover" style={styles.firstnumber} source={require('../Images/crown.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ImagePosition} >
                                <Image resizeMode="cover" style={styles.anotherUplodImg} source={require('../Images/ana.png')} />
                                <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                    <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>
                                        <View style={{ width: "100%" }}>
                                            <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe</Text>
                                        </View>
                                        {/* <View style={{ width: "34%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Image resizeMode="cover" style={styles.heartImg} source={require('../Images/connect.png')} />
                                            <Image resizeMode="cover" style={styles.heartImg} source={require('../Images/sms.png')} />
                                        </View> */}

                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ImagePosition} >
                                <Image resizeMode="cover" style={styles.anotherUplodImg} source={require('../Images/ana.png')} />
                                <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                    <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>
                                        <View style={{ width: "100%" }}>
                                            <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe</Text>
                                        </View>
                                        {/* <View style={{ width: "34%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Image resizeMode="cover" style={styles.heartImg} source={require('../Images/connect.png')} />
                                            <Image resizeMode="cover" style={styles.heartImg} source={require('../Images/sms.png')} />
                                        </View> */}

                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ImagePosition} >
                                <Image resizeMode="cover" style={styles.anotherUplodImg} source={require('../Images/ana.png')} />
                                <View style={{ backgroundColor: 'rgba(255,255,255,0.8)', }}>
                                    <LinearGradient style={styles.userText} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0)',]}>
                                        <View style={{ width: "100%" }}>
                                            <Text style={{ color: '#fff', fontSize: 16 }} >Jhon Doe</Text>
                                        </View>
                                        {/* <View style={{ width: "34%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Image resizeMode="cover" style={styles.heartImg} source={require('../Images/connect.png')} />
                                            <Image resizeMode="cover" style={styles.heartImg} source={require('../Images/sms.png')} />
                                        </View> */}

                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>

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
        backgroundColor: 'transparent',
        position: 'relative'
    },
    headerRow: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        zIndex: 400,
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
        width: '60%',
    },
    menuImg: {
        width: 20,
        height: 20,
    },
    paddingView: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        // alignItems: 'center',
    },
    bgButton: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    connectImg: {
        width: 26,
        height: 26,
    },
    imageView: {
        width: '100%',
        height: 260,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        backgroundColor: '#fff',
        position: 'relative',

    },
    profileImg: {
        width: '100%',
        height: 260,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        // paddingTop: 20,
        // position: 'absolute',
        // top: -60,
    },
    cameraBtn: {
        position: 'absolute',
        bottom: -12,
        right: 24,
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    codeImg: {
        width: 25,
        height: 25,
        marginRight: 10,
    },

    scanNameView: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    connectView: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
        width: '40%'
    },
    connectView1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    connectView2: {

        alignItems: 'center',
        width: '60%'
    },
    nameText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'left',
        width: '100%',
        marginBottom: 10,
    },
    loremtext: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'left',
        width: '100%',
        marginBottom: 20,
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
    selectBtn: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FF5A79'
    },
    uploadRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
        display: "flex",
    },
    uplodBtn: {
        width: '48%',
        height: 253,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
        display: "flex",
    },
    uplodBtn1: {
        width: '48%',
        height: 253,
        borderRadius: 10,
    },
    uploadText: {
        color: '#EE3C90',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
    },
    anotherUplodImg: {
        width: '100%',
        height: 253,
        borderRadius: 10,
    },
    userText: {
        width: '100%',
        // height: 50,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 10,
        paddingVertical: 14,
        flexDirection: 'row',
        display: "flex",
    },
    ImagePosition: {
        width: 150,
        height: 253,
        borderRadius: 10,
        position: 'relative',
        marginRight: 14,
    },
    heartImg: {
        width: 20,
        height: 20,
        // marginRight: 10
    },
    firstnumber: {
        width: 26,
        height: 26,
        position: 'absolute',
        top: 4,
        right: 10,
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