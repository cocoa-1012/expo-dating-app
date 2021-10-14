import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DifferentUser2 from './DifferentUser2';
import MapPage from './MapPage';

import { Dimensions } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            initialRouteName="DifferentUser2"

            tabBarOptions={{
                activeTintColor: '#EE3C90',
                inactiveTintColor: '#fff',
                pressColor: '#EE3C90',
                scrollEnabled: true,
                pressOpacity: 0.4,
                showIcon: true,
                labelStyle: {
                    fontSize: 16,
                    // alignItems: 'center',
                    width: '100%',
                    height: 60,
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
                name="DifferentUser2"
                component={DifferentUser2}
                options={{ tabBarLabel: 'Card View' }}
            />
            <Tab.Screen
                name="MapPage"
                component={MapPage}
                options={{ tabBarLabel: 'Map View', }}
            />

        </Tab.Navigator>
        // </NavigationContainer>
    );
}