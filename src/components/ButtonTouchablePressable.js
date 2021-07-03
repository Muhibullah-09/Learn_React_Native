import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Button
} from 'react-native';



const DissmissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

function ButtonTouchablePressable() {
    const [Name, SetName] = useState('');
    const [Submitted, SetSubmitted] = useState(false);
    const ButtonHandler = () => {
        SetSubmitted(!Submitted)
    }
    return (
        <DissmissKeyboard>
            <View style={styles.body}>
                <Text style={styles.text}>Please Enter Your Name</Text>
                <TextInput
                    placeholder="e.g Muhib Kamali"
                    style={styles.input}
                    onChangeText={(name) => SetName(name)}
                />
                <Button
                    title='Submit'
                    onPress={ButtonHandler}
                />
                {Submitted ?
                    <Text style={styles.text}>
                        Your Registered successfully : {Name}
                    </Text>
                    :
                    null
                }
            </View>
        </DissmissKeyboard>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 20,
        fontStyle: 'italic',
        margin: 10,
    },
    input: {
        borderWidth: 1,
        width: 300,
        color: 'black',
        borderColor: 'grey',
        borderRadius: 10,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default ButtonTouchablePressable
