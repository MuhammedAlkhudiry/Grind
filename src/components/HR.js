import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../helpers/Colors';
import Layout from '../helpers/Layout';


export default function HR() {

    return (
        <View style={styles.container}>
            <View style={styles.hr} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    hr: {
        backgroundColor: Colors.step_550,
        height: 1,
        width: Layout.window.width - 25,
    },
});
