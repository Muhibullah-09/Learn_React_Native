import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';

function ScreenB({navigation}) {
    const PressHandler = () => {
        navigation.navigate('Screen_A')
        // navigation.replace('Screen_A')
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Screen B</Text>
            <Pressable
                onPress={PressHandler}
                style={({ pressed }) =>
                    [
                        styles.button,
                        { backgroundColor: pressed ? '#2D8D5D' : '#86D6AE' }
                    ]
                }
            >
                <Text style={styles.text}>Go to Screen A</Text>
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


export default ScreenB;