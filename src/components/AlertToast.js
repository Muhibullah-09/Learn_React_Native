import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Pressable,
    Alert,
    ToastAndroid,
} from 'react-native';

const DissmissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);


function AlertToast() {
    const [Name, SetName] = useState('');
    const [Submitted, SetSubmitted] = useState(false);
    const ButtonHandler = () => {
        if (Name.length > 3) {
            SetSubmitted(!Submitted);
        }
        else {
            // Alert.alert('Warning', 'Name must be longer then 3 characters.', [
            //     {
            //         text: 'Do not show again',
            //         onPress: () => console.warn('Do not show again'),
            //     },
            //     {
            //         text: 'Cencel',
            //         onPress: () => console.warn('Cencel'),
            //     },
            //     {
            //         text: 'OK',
            //         onPress: () => console.warn('OK Pressed!'),
            //     }
            // ], 
            // {
            //     cancelable: true,
            //     onDismiss: () => console.warn('Alert Dissmiss')
            // }
            // );
            // ToastAndroid.show( //it will show by default on bottom
            //     'Name must be longer then 3 characters.',
            //     // ToastAndroid.SHORT //time duration 2 sec
            //     ToastAndroid.LONG     //time duration 3.5 sec
            // )
            // ToastAndroid.showWithGravity( //it will show where  we define
            //     'Name must be longer then 3 characters.',
            //     // ToastAndroid.SHORT //time duration 2 sec
            //     ToastAndroid.LONG,     //time duration 3.5 sec
            //     ToastAndroid.CENTER
            // )
            ToastAndroid.showWithGravityAndOffset( //it will show where we define its width and height
                'Name must be longer then 3 characters.',
                // ToastAndroid.SHORT //time duration 2 sec
                ToastAndroid.LONG,     //time duration 3.5 sec
                ToastAndroid.TOP,
                0,    //left
                200  //top
            )
        }
    };
    return (
        <DissmissKeyboard>
            <View style={styles.body}>
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
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
        // backgroundColor: '#86D6AE',
    },
});
export default AlertToast
