import AsyncStorage from '@react-native-async-storage/async-storage';
// import SQLite from 'react-native-sqlite-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setAge } from '../../src/redux';
import CustomButton from '../propsComp/Button';
import GlobalStyle from '../styles/GlobalStyles';


// //Database Creation
// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default',
//     },
//     () => { },
//     error => { console.log(error) }
// );


//Main Component
function Home({ navigation }) {
    const { name, age } = useSelector(state => state.user);
    const dispatch = useDispatch();

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        // setName(user.Name);
                        // setAge(user.Age);
                        dispatch(setName(user.Name));
                        dispatch(setAge(user.Age));
                    }
                })
            // db.transaction((tx) => {
            //     tx.executeSql(
            //         "SELECT Name, Age FROM Users",
            //         [],
            //         (tx, results) => {
            //             var len = results.rows.length;
            //             if (len > 0) {
            //                 var userName = results.rows.item(0).Name;
            //                 var userAge = results.rows.item(0).Age;
            //                 // setName(userName);
            //                 // setAge(userAge);
            //                 dispatch(setName(userName));
            //                 dispatch(setAge(userAge));
            //             }
            //         }
            //     )
            // })
        } catch (error) {
            console.log(error);
        }
    }

    // const updateData = async () => {
    //     if (name.length == 0) {
    //         Alert.alert('Warning!', 'Please write your data.')
    //     } else {
    //         try {
    //             // var user = {
    //             //     Name: name
    //             // }
    //             // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
    //             // Alert.alert('Success!', 'Your data has been updated.');
    //             db.transaction((tx) => {
    //                 tx.executeSql(
    //                     "UPDATE Users SET Name=?",
    //                     [name],
    //                     () => { Alert.alert('Success!', 'Your data has been updated.') },
    //                     error => { console.log(error) }
    //                 )
    //             })
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }

    const removeData = async () => {
        try {
            navigation.navigate('Login');
            await AsyncStorage.clear();
            // db.transaction((tx) => {
            //     tx.executeSql(
            //         "DELETE FROM Users",
            //         [],
            //         () => { navigation.navigate('Login') },
            //         error => { console.log(error) }
            //     )
            // })
        } catch (error) {
            console.log(error);
        }
    }
    const countryNavigator = () => {
        navigation.navigate('Countries');
    }
    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
                Welcome {name} !
            </Text>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
                Your age is {age}
            </Text>
            {/* <TextInput
                style={styles.input}
                placeholder='Update your name'
                value={name}
                onChangeText={(value) => dispatch(setName(value))}
            // onChangeText={(value) =>setName(value)}

            /> */}
            {/* <CustomButton
                title='Update'
                color='#ff7f00'
                onPressFunction={updateData}
            /> */}

            <CustomButton
                title='Logout'
                color='#f40100'
                onPressFunction={removeData}
            />
            <CustomButton
                title='Countries'
                color='#f40120'
                onPressFunction={countryNavigator}
            />
            {/* <PushNotificationLocal /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    }
})

export default Home;