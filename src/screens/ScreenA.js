import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

function ScreenA({ navigation, route }) {
    const PressHandler = () => {
        // navigation.navigate('Screen_B',{text: 'Params from Screen A' , textId:1});
        navigation.navigate('Screen_B');
        // navigation.replace('Screen_B')
    }
    return (
        <View style={styles.body}>
            <Text
                style={[GlobalStyles.CustomFont, styles.text]}
            >Screen A</Text>
            <Pressable
                onPress={PressHandler}
                style={({ pressed }) =>
                    [
                        styles.button,
                        { backgroundColor: pressed ? '#2D8D5D' : '#86D6AE' }
                    ]
                }
            >
                <Text style=
                    {
                        [GlobalStyles.ButtonStyle, styles.text]
                    }
                >Go to Screen B</Text>
            </Pressable>
            <Text>{route.params?.Message}</Text>
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
        // fontFamily: 'Lobster-Regular',
        fontSize: 40,
        // fontWeight: 'bold',
        margin: 10,
        // fontFamily: 'FjallaOne-Regular',
    }
});


export default ScreenA;