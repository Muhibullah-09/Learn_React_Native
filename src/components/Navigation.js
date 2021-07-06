import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';


// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
function Navigation() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator
            // screenOptions={{
            //     header: () => null
            // }}
            >
                <Stack.Screen
                    name="Screen_A"
                    component={ScreenA}
                    // options={{ header: () => null }}
                />
                <Stack.Screen name="Screen_B" component={ScreenB} />
            </Stack.Navigator> */}
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;
                        if (route.name === 'Screen_A') {
                            iconName = 'autoprefixer';
                            size = focused ? 25 : 20;
                            // color = focused ? '#f0f' : '#555';
                        } else if (route.name === 'Screen_B') {
                            iconName = 'anchor';
                            // iconName = 'anchor';
                            size = focused ? 25 : 20;
                            // color = focused ? '#f0f' : '#555';
                        }
                        return (
                            <FontAwesome5
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        )
                    }
                })}
                tabBarOptions={
                    {
                        activeBackgroundColor: "#fff",
                        inactiveBackgroundColor: "#999",
                        activeTintColor: "#f0f",
                        inactiveTintColor: "#555",
                        showLabel: true,
                        labelStyle: { fontSize: 14, },
                        showIcon: true,
                    }
                }
                activeColor="#f0edf6"
                inactiveColor="#3e2456"
                barStyle={{ backgroundColor: '#694fad' }}
            >
                <Tab.Screen
                    name="Screen_A"
                    component={ScreenA}
                    options={{ tabBarBadge: 3 }}
                />
                <Tab.Screen
                    name="Screen_B"
                    component={ScreenB}
                    options={{ tabBarBadge: 1 }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;