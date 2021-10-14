import React, { Component } from 'react'
import { QRCode } from 'react-native-custom-qr-codes-expo';

import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, TextInput, ScrollView, Platform, Dimensions } from 'react-native'
import Svg, {
    Circle,
    Ellipse,
    G,

    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,

    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

export default class QrCodeDisplay extends Component {


    render() {
        return (
            <View style={styles.container}>
                <QRCode
                    content='https://reactnative.com'
                    codeStyle='square'
                    outerEyeStyle='square'
                    innerEyeStyle='square'
                    color="#fff"

                />
                <View style={styles.paddingView}>
                    <TouchableOpacity activeOpacity={0.4} style={styles.continueBtn} >
                        <Text style={{ color: '#fff', fontSize: 18 }}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#040035',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,

    },
    continueBtn: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        backgroundColor: '#EE3C90',
        borderRadius: 50,
        // marginBottom: 20,
    },
    paddingView: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

});

