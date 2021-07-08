import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import ScreenA from '../screens/ScreenA';
// import ScreenB from '../screens/ScreenB';
import Home from '../screens/Home';
import Login from '../screens/Login';


const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
// const Drawer = createDrawerNavigator();
function Navigation() {
    return (
        // <NavigationContainer>
        //     {/* <Stack.Navigator
        //     // screenOptions={{
        //     //     header: () => null
        //     // }}
        //     >
        //         <Stack.Screen
        //             name="Screen_A"
        //             component={ScreenA}
        //             // options={{ header: () => null }}
        //         />
        //         <Stack.Screen name="Screen_B" component={ScreenB} />
        //     </Stack.Navigator> */}
        //     <Tab.Navigator
        //         screenOptions={({ route }) => ({
        //             tabBarIcon: ({ focused, size, color }) => {
        //                 let iconName;
        //                 if (route.name === 'Screen_A') {
        //                     iconName = 'autoprefixer';
        //                     size = focused ? 25 : 20;
        //                     // color = focused ? '#f0f' : '#555';
        //                 } else if (route.name === 'Screen_B') {
        //                     iconName = 'anchor';
        //                     // iconName = 'anchor';
        //                     size = focused ? 25 : 20;
        //                     // color = focused ? '#f0f' : '#555';
        //                 }
        //                 return (
        //                     <FontAwesome5
        //                         name={iconName}
        //                         size={size}
        //                         color={color}
        //                     />
        //                 )
        //             }
        //         })}
        //         tabBarOptions={
        //             {
        //                 activeBackgroundColor: "#fff",
        //                 inactiveBackgroundColor: "#999",
        //                 activeTintColor: "#f0f",
        //                 inactiveTintColor: "#555",
        //                 showLabel: true,
        //                 labelStyle: { fontSize: 14, },
        //                 showIcon: true,
        //             }
        //         }
        //         activeColor="#f0edf6"
        //         inactiveColor="#3e2456"
        //         barStyle={{ backgroundColor: '#694fad' }}
        //     >
        //         <Tab.Screen
        //             name="Screen_A"
        //             component={ScreenA}
        //             options={{ tabBarBadge: 3 }}
        //         />
        //         <Tab.Screen
        //             name="Screen_B"
        //             component={ScreenB}
        //             options={{ tabBarBadge: 1 }}
        //         />
        //     </Tab.Navigator>
        // </NavigationContainer>
        // <NavigationContainer>
        //     <Drawer.Navigator
        //         initialRouteName="Screen_A"
        //         // drawerPosition='right'
        //         // drawerType='back'
        //         edgeWidth={100}
        //         hideStatusBar={true}
        //         overlayColor='#000000'
        //         drawerStyle={{
        //             backgroundColor: '#e6e6e6',
        //             width: 250,
        //         }}
        //         screenOptions={{
        //             headerShown: true,
        //             swipeEnabled: true,
        //             gestureEnabled: true,
        //             headerTitleAlign: 'center',
        //             headerStyle: {
        //                 backgroundColor: '#4FA77D',
        //             },
        //             headerTintColor: '#D6FAE9',
        //             headerTitleStyle: {
        //                 fontSize: 25,
        //                 fontWeight: 'bold',
        //             }
        //         }}
        //     >
        //         <Drawer.Screen
        //             name="Screen_A"
        //             component={ScreenA}
        //             options={{
        //                 title: 'Screen_A Title',
        //                 drawerIcon: ({ focused }) => (
        //                     <FontAwesome5
        //                         name='btc'
        //                         size={focused ? 25 : 20}
        //                         color={focused ? '#f0f' : '#555'}
        //                     />
        //                 )
        //             }}
        //         />
        //         <Drawer.Screen
        //             name="Screen_B"
        //             component={ScreenB}
        //             options={{
        //                 title: 'Screen_B Title',
        //                 drawerIcon: ({ focused }) => (
        //                     <FontAwesome5
        //                         name='accusoft'
        //                         size={focused ? 25 : 20}
        //                         color={focused ? '#f0f' : '#555'}
        //                     />
        //                 )
        //             }}
        //             initialParams={{ text: 'Params from Drawer', textId: 1 }}
        //         />
        //     </Drawer.Navigator>
        // </NavigationContainer>
        <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Navigation;