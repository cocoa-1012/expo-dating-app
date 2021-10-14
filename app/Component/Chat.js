import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform, Dimensions } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import initialMessages from './ChatMessage';
import { renderInputToolbar, renderActions, renderComposer, renderSend } from './InputToolbar';
import {
    renderAvatar,
    renderBubble,
    renderSystemMessage,
    renderMessage,
    renderMessageText,
    renderCustomView,
} from './MessageContainer';
import { useNavigation } from '@react-navigation/core';

export default function Chat() {
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
                user: {
                    _id: 2,
                    // name: 'Nikhil',
                    // avatar: 'https://placeimg.com/140/140/any',
                },

            },

        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar />

            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.arrowBtn} onPress={() => navigation.goBack()}>
                        <Image style={styles.menuImg} resizeMode={'contain'} source={require('../Images/leftArrow.png')} />
                    </TouchableOpacity>
                    <View style={styles.chatImg}>
                        <View style={{ width: '20%' }}>
                            <Image style={styles.borderImg} resizeMode={'cover'} source={require('../Images/dashingGirl.png')} />
                        </View>
                        <View style={styles.chatImg}>
                            <View style="60%">
                                <Text style={styles.textprofile}>Jhon Doe</Text>
                                <Text style={{ fontSize: 10, color: '#fff' }}>1 min ago</Text>
                            </View>
                            <TouchableOpacity>
                                <Feather name="more-vertical" size={30} color="#fff" />
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>
            </View>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
                <View style={{ width: Dimensions.get('window').width, height: '100%' }} >
                    <GiftedChat
                        messages={messages}
                        isTyping={true}
                        onSend={onSend}
                        user={{
                            _id: 1,
                            // name: 'Aaron',
                            // avatar: 'https://placeimg.com/150/150/any',
                        }}

                        alignTop
                        alwaysShowSend
                        scrollToBottom
                        // showUserAvatar
                        // renderAvatarOnTop
                        // renderUsernameOnMessage
                        // bottomOffset={26}
                        // onPressAvatar={console.log}
                        // renderInputToolbar={renderInputToolbar}
                        // renderActions={renderActions}
                        // renderComposer={renderComposer}
                        renderSend={renderSend}
                        // renderAvatar={renderAvatar}
                        // renderBubble={renderBubble}
                        // renderSystemMessage={renderSystemMessage}
                        // renderMessage={renderMessage}
                        // renderMessageText={renderMessageText}
                        // renderMessageImage
                        // renderCustomView={renderCustomView}
                        // isCustomViewBottom

                        messagesContainerStyle={{ width: '100%', height: '100%' }}
                        parsePatterns={(linkStyle) => [
                            {
                                pattern: /#(\w+)/,
                                style: linkStyle,
                                onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
                            },
                        ]}
                    />
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
    header: {
        width: '100%',
        // height: 60,
        paddingHorizontal: 20,
    },
    headerRow: {
        width: '100%',
        // height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 8
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
        fontSize: 20,
        // width: '80%',
    },
    menuImg: {
        width: 20,
        height: 20,
    },
    paddingView: {
        paddingHorizontal: 20,
        // paddingVertical: 30,
        alignItems: 'center',
    },
    inputGrad: {
        width: '94%',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    crownImg: {
        width: 96,
        height: 96
    },
    chatImg: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // height: 40,
        // borderRadius: 50,
        // borderColor: '#EE3C90',
        // borderWidth: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    borderImg: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderColor: '#EE3C90',
        borderWidth: 1.5,
    },
});