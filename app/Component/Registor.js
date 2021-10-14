import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/core';

export default function Registor() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ImgUp}>
                    <Image style={styles.partyImg}  resizeMode="cover" source={require('../Images/Union.png')} />
                </View>
                <View style={styles.paddingView}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.welcomText}>Register</Text>
                    </View>
                    <TextInput placeholder="Email Id" style={styles.emailText} />
                    <TextInput placeholder="Password" style={styles.emailText} />
                    <TextInput placeholder="Confirm Password" style={styles.emailText} />

                    
                   
                    <TouchableOpacity onPress={() => navigation.navigate('MakeProfile')}>
                        <LinearGradient style={styles.googleBtn} colors={['rgba(196, 196, 196, 0.27)', 'rgba(196, 196, 196, 0.16)',]} >
                            <Text style={styles.faceText}>Signup</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={styles.signupBtn}>
                        <Text style={{ color: '#fff', fontSize: 14 }}>Already have an account?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', marginLeft: 8 }}>sign in</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.textCenter}>
                        <View style={styles.socailmedia}>
                            <TouchableOpacity style={styles.facBtn}>
                                <Image style={styles.faceimg} source={require('../Images/facebook.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.facBtn}>
                                <Image style={styles.faceimg} source={require('../Images/search.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.textCenter}>
                        <Text style={{ color: '#fff' }}>By signing up you agree to Hide & Seek</Text>
                        <Text style={styles.policyView} >
                            <Text style={{ color: '#EE3C90', marginRight: 4 }}>Term of use</Text>
                            <Text style={{ color: '#fff', marginRight: 4 }}>&</Text>
                            <Text style={{ color: '#EE3C90' }}>Privacy Policy</Text>
                        </Text>
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
    },
    ImgUp: {
        width: "100%",
        height: 270,
        position: 'relative',
    },
    partyImg: {
        width: "125%",
        height: 270,
        borderBottomLeftRadius: 270,
        borderBottomRightRadius: 270,
        position: 'absolute',
        top: -42,
        left: -45,
    },
    paddingView: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    welcomText: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        width: '70%',
        textAlign: 'left',
        marginTop: -40,
    },
    emailText: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingHorizontal: 10,
        marginBottom: 22,
        fontSize: 16,
    },
    forgotPass: {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: 14,
    },
    signupBtn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    socailmedia: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
        width: '60%'
    },
    facBtn: {
        backgroundColor: "#fff",
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',       
        height: 40,
        width: 40,
    },
    faceText:{
        color:'#fff',
        fontSize:16,
        textAlign:'center'
    },
    faceimg: {
        height: 20,
        width: 20,
    },
    googleBtn: {
        borderRadius: 14,
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginBottom: 10,
    },
    textCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    policyView: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
});