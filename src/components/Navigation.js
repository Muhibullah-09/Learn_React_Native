import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';


// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
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
                        } else if (route.name === 'Screen_B') {
                            iconName = 'anchor';
                        }
                        return (
                            <FontAwesome5
                                name={iconName}
                            />
                        )
                    }
                })}
            >
                <Tab.Screen
                    name="Screen_A"
                    component={ScreenA}
                />
                <Tab.Screen
                    name="Screen_B"
                    component={ScreenB}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;