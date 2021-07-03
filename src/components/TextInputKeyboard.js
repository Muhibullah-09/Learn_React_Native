import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';



const DissmissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

function TextInputKeyboard() {
    const [Name, SetName] = useState('');
    return (
        <DissmissKeyboard>
            <View style={styles.body}>
                <Text style={styles.text}>Please Enter Your Name</Text>
                <TextInput
                    multiline
                    placeholder="e.g Muhib Kamali"
                    style={styles.input}
                    onChangeText={(name) => SetName(name)}
                // secureTextEntry
                // keyboardType= 'numeric'
                // maxLength={2}
                // editable= {false}
                //many props are available for inputText
                />
                <Text style={styles.text}>
                    Your Name is : {Name}
                </Text>
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
    },
});

export default TextInputKeyboard