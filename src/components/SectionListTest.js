import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, FlatList, SectionList } from 'react-native';


function SectionListTest() {
    const [Count , setCount] = useState(1);
    const [Items, setItems] = useState([
        {
            header: `Title ${Count}`,
            data: [`Item${Count}-1`, `Item${Count}-${Count+1}`],
        },
    ]);
    const [Refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setItems([...Items, { header:`Title ${Count+1}`,data:[`Item${Count+1}-1`,`Item${Count+1}-2`] }]);
        setCount(Count + 1);
        setRefreshing(false);
    }
    return (
        <SectionList
            keyExtractor={(item, index) => index.toString()}
            sections={Items}
            renderItem={({ item }) => (
                <Text style={styles.text}>{item}</Text>
            )}
            renderSectionHeader={({ section }) => (
                <View style={styles.items}>
                    <Text style={styles.title}>{section.header}</Text>
                </View>
            )}
            refreshControl={
                <RefreshControl
                    refreshing={Refreshing}
                    onRefresh={onRefresh}
                    //colors can define all colors of reloader when it occurs
                    colors={['#CDCDCD', '#30453A']}
                />
            }
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
        justifyContent: 'center',
        
    },
    title: {
        backgroundColor: '#4ae1fa',
        fontSize: 35,
        color: '#000000',
        fontStyle: 'italic',
    },
    text: {
        color: '#000000',
        fontSize: 35,
        fontStyle: 'italic',
        margin: 10,
        textAlign: 'center',
        borderBottomColor: '#828885',
        borderWidth: 3,
    }
});

export default SectionListTest;