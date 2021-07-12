import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import GlobalStyle from '../styles/GlobalStyles';
import MapView from 'react-native-maps';
import CustomButton from '../propsComp/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Map({ navigation, route }) {

    const { city, lat, lng } = route.params;

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
    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
                {city}
            </Text>
            <CustomButton
                title='Logout'
                color='#f40120'
                onPressFunction={removeData}
            />
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
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
    map: {
        width: '100%',
        height: '100%',
    }
});