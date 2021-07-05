import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Pressable,
    Modal
} from 'react-native';

const DissmissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);


function Modals() {
    const [Name, SetName] = useState('');
    const [Submitted, SetSubmitted] = useState(false);
    const [ShowWarning, SetShowWarning] = useState(false);
    const ButtonHandler = () => {
        if (Name.length > 3) {
            SetSubmitted(!Submitted);
        }
        else {
            SetShowWarning(true);
        }
    };
    return (
        <DissmissKeyboard>
            <View style={styles.body}>
                <Modal
                    visible={ShowWarning}
                    transparent
                    onRequestClose={() =>
                        SetShowWarning(false)
                    }
                    animationType='slide'
                    hardwareAccelerated
                >
                    <View style={styles.warning_centered}>
                        <View style={styles.warning_modal}>
                            <View style={styles.warning_title}>
                                <Text style={styles.text}>WARNING!</Text>
                            </View>
                            <View style={styles.warning_body}>
                                <Text style={styles.text}>Name must be longer then 3 characters.</Text>
                            </View>
                            <Pressable
                                onPress={() => SetShowWarning(false)}
                                style={styles.warning_button}
                                android_ripple={{color: '#fff'}}
                            >
                                <Text style={styles.text}>OK</Text>

                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Text style={styles.text}>Please Enter Your Name</Text>
                <TextInput
                    placeholder="e.g Muhib Kamali"
                    style={styles.input}
                    onChangeText={name => SetName(name)}
                />
                <Pressable
                    onPress={ButtonHandler}
                    android_ripple={{ color: '00f' }}
                    style={({ pressed }) =>
                        [
                            styles.button,
                            { backgroundColor: pressed ? '#2D8D5D' : '#86D6AE' }
                        ]
                    }
                >
                    <Text style={styles.text}>
                        {Submitted ? 'Clear' : 'Submit'}
                    </Text>
                </Pressable>
                {Submitted ? (
                    <Text style={styles.text}>Your Registered as {Name}</Text>
                ) : null}
            </View>
        </DissmissKeyboard >
    );
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
        margin: 10,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        width: 250,
        color: 'black',
        borderColor: 'grey',
        borderRadius: 10,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center'
    },
    warning_centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099',

    },
    warning_modal: {
        width: 300,
        height: 300,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
    },
    warning_title: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff0',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    warning_body: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    warning_button: {
        backgroundColor:'#94A79E',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
});
export default Modals;
