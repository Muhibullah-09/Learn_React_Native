import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TextInput,
    Alert,
    Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setAge } from '../../src/redux';
import CustomButton from '../propsComp/Button';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);

function Login({ navigation }) {
    const { name, age } = useSelector(state => state.user);
    const dispatch = useDispatch();

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');


    useEffect(() => {
        createTable();
        getData();
    }, []);

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
            )
        })
    }

    const getData = () => {
        try {
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             navigation.navigate('Home');
            //         }
            //     })
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            navigation.navigate('Home');
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0 || age == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                dispatch(setName(name));
                dispatch(setAge(age));
                // var user = {
                //     Name: name,
                //     Age: age
                // }
                // await AsyncStorage.setItem('UserData', JSON.stringify(user));
                await db.transaction(async (tx) => {
                    // await tx.executeSql(
                    //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
                    // );
                    await tx.executeSql(
                        "INSERT INTO Users (Name, Age) VALUES (?,?)",
                        [name, age]
                    );
                })
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View style={styles.body} >
            {/* For AsyncStorage 
            <Image
                style={styles.logo}
                source={require('../assets/images/done.png')}
            />
            <Text style={styles.text}>
                Async Storage
            </Text> */}
            {/* For SQ-Lite Database */}
            <Image
                style={styles.logo}
                // source={require('../assets/images/country.png')}
                source={require('../assets/images/withoutbg.png')}
            />
            <Text style={styles.text}>
                Country Location Picker
            </Text> 
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => dispatch(setName(value))}
            // onChangeText={(value) => setName(value)}

            />
            <TextInput
                style={styles.input}
                placeholder='Enter your age'
                onChangeText={(value) => dispatch(setAge(value))}
                // onChangeText={(value) => setAge(value)}
                keyboardType='numeric'
            />
            <CustomButton
                title='Login'
                color='#1eb900'
                onPressFunction={setData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        // backgroundColor: '#000',
        width: 300,
        height: 150,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        fontFamily: 'Lobster-Regular',
        marginBottom: 30,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    }
})

export default Login;