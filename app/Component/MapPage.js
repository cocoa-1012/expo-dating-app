import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, FlatList, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function MapPage() {
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    });
    return (
        <View style={styles.container}>
            {/* <MapView
                style={{ width: '100%', height: 300, borderRadius: 20, }}
                region={region}
                showsUserLocation={true}
                onRegionChangeComplete={region => setRegion(region)}
                // provider={PROVIDER_GOOGLE}
                zoomEnabled={true}
                zoomControlEnabled={true}
            >
                <Marker coordinate={{ latitude: 51.5078788, longitude: -0.0877321 }} />
            </MapView> */}
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#040035',
        alignItems: 'center',
        paddingTop: 20,
    },
});