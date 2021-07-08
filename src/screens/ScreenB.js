import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

function ScreenB({ route, navigation }) {
    const { text, textId } = route.params;
    const PressHandler = () => {
        navigation.navigate('Screen_A', { Message: 'Message from B' });
        // navigation.goBack();
        // navigation.replace('Screen_A');
        // navigation.setParams({
        //     textId: textId + 1
        // });
    }
    return (
        <View style={styles.body}>
            <Text
                style={[GlobalStyles.CustomFont, styles.text]}
            >Screen B</Text>
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
                >
                    Go to Screen A
                </Text>
            </Pressable>
            <Text>{text}</Text>
            <Text>{textId}</Text>
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
        // fontWeight: 'bold',
        margin: 10,
    }
});


export default ScreenB;