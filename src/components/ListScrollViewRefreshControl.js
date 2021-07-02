import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';

function ListScrollViewRefreshControl() {
    const [Items, setItems] = useState([
        { key: 1, item: 'Item 1' },
        { key: 2, item: 'Item 2' },
        { key: 3, item: 'Item 3' },
        { key: 4, item: 'Item 4' },
        { key: 5, item: 'Item 5' },
        { key: 6, item: 'Item 6' },
        { key: 7, item: 'Item 7' },
        { key: 8, item: 'Item 8' },
        { key: 9, item: 'Item 9' },
        { key: 10, item: 'Item 10' },
    ]); 
    const [Refreshing, setRefreshing] = useState(false);
    const onRefresh = () =>{
        setRefreshing(true);
        setItems([...Items ,  { key: 11, item: 'Muhib Kamali' }]);
        setRefreshing(false);
    }
    return (
        <ScrollView
            style={styles.body}
            refreshControl={
                <RefreshControl
                    refreshing = { Refreshing }
                    onRefresh =  { onRefresh }
                    //colors can define all colors of reloader when it occurs
                    colors = {['#CDCDCD' , '#30453A']}
                />
            }
        >
            {
                Items.map((val) => {
                    return (
                        <View style={styles.items} key={val.key}>
                            <Text style={styles.text}>{val.item}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    items: {
        margin: 10,
        backgroundColor: '#4ae1fa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#000000',
        fontSize: 35,
        fontStyle: 'italic',
        margin: 10,
    }
});

export default ListScrollViewRefreshControl;