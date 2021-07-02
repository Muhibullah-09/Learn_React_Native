import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList, SectionList } from 'react-native';

function FlatListSectionListNestedArray() {
    const [Items, setItems] = useState([
        { name: 'Item 1' },
        { name: 'Item 2' },
        { name: 'Item 3' },
        { name: 'Item 4' },
        { name: 'Item 5' },
        { name: 'Item 6' },
        { name: 'Item 7' },
        { name: 'Item 8' },
        { name: 'Item 9' },
        { name: 'Item 10' },
    ]);
    const DATA = [
        {
            header: 'Title 1',
            data: ['Item1-1', 'Item1-2', 'Item1-3'],
            footer: 'Title 1',
        },
        {
            header: 'Title 2',
            data: ['Item2-1', 'Item2-2', 'Item2-3']
        },
        {
            header: 'Title 3',
            data: ['Item3-1']
        },
        {
            header: 'Title 4',
            data: ['Item4-1', 'Item4-2']
        },
        {
            header: 'Title 5',
            data: ['Item5-1', 'Item5-2', 'Item5-3']
        },
    ]
    const [Refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setItems([...Items, { name: 'Muhib Kamali' }]);
        setRefreshing(false);
    }
    return (
        // <FlatList
        //     //flatlist accept key as string
        //     // horizontal
        //     // inverted
        //     // numColumns
        //     keyExtractor={(item, index) => index.toString()}
        //     data={Items}
        //     renderItem={({ item }) => (
        //         <View style={styles.items}>
        //             <Text style={styles.text}>{item.name}</Text>
        //         </View>
        //     )}
            // refreshControl={
            //     <RefreshControl
            //         refreshing={Refreshing}
            //         onRefresh={onRefresh}
            //         //colors can define all colors of reloader when it occurs
            //         colors={['#CDCDCD', '#30453A']}
            //     />
            // }
        // />
        <SectionList
            keyExtractor={(item, index) => index.toString()}
            sections={DATA}
            renderItem={({ item }) => (
                <Text style={styles.text}>{item}</Text>
            )}
            renderSectionHeader={({ section }) => (
                <View style={styles.items}>
                    <Text style={styles.text}>{section.header}</Text>
                </View>
            )}
        />
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

export default FlatListSectionListNestedArray;