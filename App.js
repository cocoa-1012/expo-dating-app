

import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, } from '@react-navigation/drawer';


import Login from './app/Component/Login';
import Registor from './app/Component/Registor';
import MakeProfile from './app/Component/MakeProfile';
import Home from './app/Component/Home';
import ConnectionRequest from './app/Component/ConnectionRequest';
import DrawerPage from './app/Component/DrawerPage';
import Messages from './app/Component/Messages';
import Setting from './app/Component/Setting';
import EditProfile from './app/Component/EditProfile';
import UpdateMyVenue from './app/Component/UpdateMyVenue';
import SearchNearMe from './app/Component/SearchNearMe';
import DifferentUser from './app/Component/DifferentUser';
import TopTabNavigator from './app/Component/TopTabNavigator';
import MapPage from './app/Component/MapPage';
import SearchNearMe2 from './app/Component/SearchNearMe2';
import Subscribe from './app/Component/Subscribe';
import Payment from './app/Component/Payment';
import Payment2 from './app/Component/Payment2';
import Withdraw from './app/Component/Withdraw';
import HowItWorks from './app/Component/HowItWorks';
import Competition from './app/Component/Competition';
import ScanList from './app/Component/ScanList';
import ConnectedWith from './app/Component/ConnectedWith';
import MyAccount from './app/Component/MyAccount';
import JoinPage from './app/Component/JoinPage';
import Profile from './app/Component/Profile';
import Scaner from './app/Component/Scaner';
import ChangePassword from './app/Component/ChangePassword';
import QRCode from './app/Component/QRCode';
import Chat from './app/Component/Chat';
import AnotherUser from './app/Component/AnotherUser';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerRoutes() {

  return (

    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerPage {...props} />}
      drawerStyle={{
        width:
          "80%"
      }}
      sceneContainerStyle={{
        backgroundColor: '#FFF',
        width: '100%',
      }}
    >
      <Drawer.Screen name='Home' component={Home} />
      {/* <Drawer.Screen name='AllShop' component={AllShop} />
      <Drawer.Screen name='ShopView' component={ShopView} />
      <Drawer.Screen name='AddProduct' component={AddProduct} />
      <Drawer.Screen name='AnotherProductDetail' component={AnotherProductDetail} />
      <Drawer.Screen name='ManageProduct' component={ManageProduct} />
      <Drawer.Screen name='Category' component={Category} />
      <Drawer.Screen name='CateDetail' component={CateDetail} />
      <Drawer.Screen name='CateProduct' component={CateProduct} />
      <Drawer.Screen name='NotificationPage' component={NotificationPage} />
      <Drawer.Screen options={{ headerShown: true }} name='Main' component={Main} />
      <Drawer.Screen name='Order' component={Order} />
      <Drawer.Screen name='MyCart' component={MyCart} />
      <Drawer.Screen name='EditCart' component={EditCart} />
      <Drawer.Screen name='MyProfile' component={MyProfile} />
      <Drawer.Screen name='ManageStock' component={ManageStock} />
      <Drawer.Screen name='ManageDelivery' component={ManageDelivery} />
      <Drawer.Screen name='Setting' component={Setting} />
      <Drawer.Screen name='Help' component={Help} /> */}
    </Drawer.Navigator>

  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{ headerShown: false }}>

        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Registor' component={Registor} />
        <Stack.Screen name='MakeProfile' component={MakeProfile} />
        <Stack.Screen name='ConnectionRequest' component={ConnectionRequest} />
        <Stack.Screen name='Messages' component={Messages} />
        <Stack.Screen name='Chat' component={Chat} />
        <Stack.Screen name='SearchNearMe' component={SearchNearMe} />
        <Stack.Screen name='SearchNearMe2' component={SearchNearMe2} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Scaner' component={Scaner} />

        <Stack.Screen name='Setting' component={Setting} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='QRCode' component={QRCode} />
        <Stack.Screen name='Competition' component={Competition} />
        <Stack.Screen name='Subscribe' component={Subscribe} />
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name='Payment2' component={Payment2} />
        <Stack.Screen name='JoinPage' component={JoinPage} />
        <Stack.Screen name='UpdateMyVenue' component={UpdateMyVenue} />
        <Stack.Screen name='MyAccount' component={MyAccount} />
        <Stack.Screen name='Withdraw' component={Withdraw} />
        <Stack.Screen name='HowItWorks' component={HowItWorks} />
        <Stack.Screen name='AnotherUser' component={AnotherUser} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} />
        <Stack.Screen name='MapPage' component={MapPage} />
        <Stack.Screen name='ConnectedWith' component={ConnectedWith} />

        <Stack.Screen name='Home' component={DrawerRoutes} />


      </Stack.Navigator>
    </NavigationContainer >

  );
}


