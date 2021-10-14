import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import QrCodeDisplay from './QrCodeDisplay';
import Scaner from './Scaner';

import { Dimensions } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator4() {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            initialRouteName="QrCodeDisplay"

            tabBarOptions={{
                activeTintColor: '#EE3C90',
                inactiveTintColor: '#fff',
                pressColor: '#EE3C90',
                scrollEnabled: true,
                pressOpacity: 0.4,
                showIcon: true,
                labelStyle: {
                    fontSize: 16,
                    width: '100%',
                    height: 60,
                    paddingTop: 6,
                },
                style: {
                    width: "100%",
                    height: 60,
                    alignItems: 'center',
                    backgroundColor: '#040035',
                    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
                    borderBottomWidth: 1,
                },
                tabStyle: {
                    width: 120,
                },
                indicatorStyle: {
                    backgroundColor: 'transparent',
                },

            }}

        >
            <Tab.Screen
                name="QrCodeDisplay"
                component={QrCodeDisplay}
                options={{ tabBarLabel: 'My QR Code' }}
            />
            <Tab.Screen
                name="Scaner"
                component={Scaner}
                options={{ tabBarLabel: 'Scan Code', }}
            />

        </Tab.Navigator>
        // </NavigationContainer>
    );
}