import React from 'react'
import {
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
function Button(props) {
    return (
        <Pressable
            onPress={props.ButtonHandler}
            android_ripple={{ color: '00f' }}
            style={({ pressed }) =>
                [
                    styles.button,
                    { backgroundColor: pressed ? '#2D8D5D' : '#86D6AE' }
                ]
            }
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },

    button: {
        width: 150,
        height: 50,
        alignItems: 'center'
    },
});
export default Button;