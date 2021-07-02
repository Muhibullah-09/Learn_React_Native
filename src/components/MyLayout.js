import React from 'react'

function MyLayout() {
    return (
        <View style={styles.body}>
            <View style={styles.row}>
                <View style={styles.viewOne}>
                    <Text style={styles.text}>1</Text>
                </View>
                <View style={styles.viewTwo}>
                    <Text style={styles.text}>2</Text>
                </View>
                <View style={styles.viewThree}>
                    <Text style={styles.text}>3</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.viewFour}>
                    <Text style={styles.text}>4</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.viewFive}>
                    <Text style={styles.text}>5</Text>
                </View>
            </View>
            <View style={styles.big_row}>
                <View style={styles.viewSix}>
                    <Text style={styles.text}>6</Text>
                </View>
                <View style={styles.viewSeven}>
                    <Text style={styles.text}>7</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    big_row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    viewOne: {
        flex: 1,
        backgroundColor: 'brown',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewTwo: {
        flex: 2,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewThree: {
        flex: 3,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewFour: {
        flex: 1,
        backgroundColor: 'violet',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewFive: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewSix: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewSeven: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'monospace',
        fontWeight: '400',
        fontSize: 40
    }
});


export default MyLayout;