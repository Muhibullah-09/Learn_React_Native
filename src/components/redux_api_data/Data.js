import React, { useEffect } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux';
// import { setName , setAge } from '../../redux';
import GlobalStyle from '../../styles/GlobalStyles';

function Data() {
    // const userData = useSelector(state => state.user);
    const postData = useSelector(state => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
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
                        renderItem={({ item }) => (
                            <View style={styles.items}>
                                <Text style={[GlobalStyle.ButtonStyle, styles.text]}>{item.name}</Text>
                                <Text style={styles.text}>{item.capital}</Text>
                                <Text style={styles.text}>{item.population}</Text>
                            </View>
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

export default Data;