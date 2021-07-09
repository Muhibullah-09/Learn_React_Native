import React, { useEffect } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux';
function Data() {
    const postData = useSelector(state => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return postData.loading ? (
        <Text style={styles.text}>Loading</Text>
    ) : postData.error ? (
        <Text style={styles.text}>{postData.error}</Text>
    ) : (
        <View>
            {/* <Text style={styles.text}>Post List</Text> */}
            <Text style={styles.text}>All Countries List</Text>
            <View>
                {postData &&
                    postData.posts &&
                    <FlatList
                        //flatlist accept key as string
                        // horizontal
                        // inverted
                        numColumns={2}
                            keyExtractor={(item, index) => index.toString()}
                        data={postData.posts}
                        renderItem={({ item }) => (
                            <View style={styles.items}>
                                <Text style={styles.text}>{item.name}</Text>
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
    },
    items: {
        margin: 2,
        width: '50%',
        backgroundColor: '#4ae1fa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#000000',
        fontSize: 20,
        fontStyle: 'italic',
        margin: 2,
        textAlign: 'center',
    }
});

export default Data