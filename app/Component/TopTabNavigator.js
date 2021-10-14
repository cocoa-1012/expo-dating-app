import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DifferentUser from './DifferentUser';
import MapPage from './MapPage';

import { Dimensions } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            initialRouteName="DifferentUser"

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
                    // justifyContent: 'center',                   
                    // backgroundColor:'red'
                },
                style: {
                    width: "100%",
                    height: 60,
                    alignItems: 'center',
                    backgroundColor: '#040035',
                    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
                    borderBottomWidth: 1,
                    //  backgroundColor:'blue',

                },
                tabStyle: {
                    width: 120,


                },
                indicatorStyle: {
                    backgroundColor: 'transparent',
                    //  width: "100%",
                },

            }}

        >
            <Tab.Screen
                name="DifferentUser"
                component={DifferentUser}
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