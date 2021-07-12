import React, { useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux';
import GlobalStyle from '../styles/GlobalStyles';
import PushNotification from 'react-native-push-notification';


function Countries({navigation , route}) {
    const postData = useSelector(state => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        createChannels();
        dispatch(fetchPosts())
    }, [dispatch])


    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "test-channel",
                channelName: "Test Channel"
            }
        )
    }

    const handleNotification = (item , index) => {

        PushNotification.cancelAllLocalNotifications();
        PushNotification.localNotification({
            channelId: "test-channel",
            title: "You clicked on " + item.name,
            message: item.capital,
            bigText: item.capital + " is one of the largest and most beatiful cities in " + item.name,
            color: "red",
            id: index
        });

        // PushNotification.localNotificationSchedule({
        //     channelId: "test-channel",
        //     title: "Alarm",
        //     message: "You clicked on " + item.name + " 20 seconds ago",
        //     date: new Date(Date.now() + 10 * 1000),
        //     allowWhileIdle: true,
        // });
    }
    return postData.loading ? (
        <Text style={styles.text}>Loading...</Text>
    ) : postData.error ? (
        <Text style={styles.text}>{postData.error}</Text>
    ) : (
        <View>
            {/* <Text style={styles.text}>Post List</Text> */}
            <Text style={[GlobalStyle.CustomFont, styles.title]}>All Countries List</Text>
            <View>
                {postData &&
                    postData.posts &&
                    <FlatList
                        //flatlist accept key as string
                        // horizontal
                        // inverted
                        // numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        data={postData.posts}
                        renderItem={({ item , index}) => (
                            <TouchableOpacity
                                onPress={() => { 
                                    handleNotification(item , index);
                                    navigation.navigate('Map',{ 
                                        city: item.city,
                                        lat: item.latitude,
                                        lng: item.lng, 
                                    });
                                }}
                            >
                                <View style={styles.items}>
                                    <Text style={[GlobalStyle.ButtonStyle, styles.text]}>{item.country}</Text>
                                    <Text style={styles.text}>{item.city}</Text>
                                    {/* <Text style={styles.text}>{item.population}</Text> */}
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                    // postData.posts.map((post, idx) => <Text key={idx}>{post.id}</Text>)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        // flex: 1,
        // alignItems: 'center',
    },
    title: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    },
    items: {
        margin: 3,
        // width: '50%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
    },
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 2,
        textAlign: 'center',
    }
});


export default Countries
