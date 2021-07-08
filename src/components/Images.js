import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Pressable,
    Modal,
    Image,
    ImageBackground
} from 'react-native';

import Button from '../propsComp/Button';

const DissmissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);


function Images() {
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
            <ImageBackground
                style={styles.body}
                source={{ uri: 'https://www.teahub.io/photos/full/226-2262263_cool-boys-mobile-wallpapers-full-hd-boys-wallpaper.jpg' }}
            >
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
                                android_ripple={{ color: '#fff' }}
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
                <Button
                    ButtonHandler={ButtonHandler}
                    title={Submitted ? 'Clear' : 'Submit'}
                />
                {Submitted ?
                    <View style={styles.body}>
                        <Text style={styles.text}>Your Registered as {Name}</Text>
                        <Image
                            style={styles.image}
                            source={require('../assets/done.png')}
                            resizeMode='stretch'
                        />
                    </View>
                    :
                    <Image
                        style={styles.image}
                        // source={require('../assets/error.png')}
                        source={{ uri: 'https://www.freeiconspng.com/uploads/error-icon-4.png' }}
                        resizeMode='stretch'
                        blurRadius={3}
                    />
                }
            </ImageBackground>
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
        backgroundColor: '#94A79E',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    image: {
        width: 100,
        height: 100,
        margin: 10
    },
});

export default Images;