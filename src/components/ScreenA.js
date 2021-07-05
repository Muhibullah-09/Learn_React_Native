import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';

function ScreenA({navigation}) {
    const PressHandler = () => {
        navigation.navigate('Screen_B')
        // navigation.replace('Screen_B')
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Screen A</Text>
            <Pressable
                onPress={PressHandler}
                style={({ pressed }) =>
                    [
                        styles.button,
                        { backgroundColor: pressed ? '#2D8D5D' : '#86D6AE' }
                    ]
                }
            >
                <Text style={styles.text}>Go to Screen B</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
});


export default ScreenA;