import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../helpers/Colors';
import Layout from '../../helpers/Layout';


export default function SessionFinishedModal({visible, onPress}) {

    return (
        <View>
            <Modal isVisible={visible}
                   animationIn="zoomInDown"
                   animationOut="zoomOutUp"
                   style={{margin: 0}}
                   onBackdropPress={() => onPress('stop')}
                   animationInTiming={300}
                   animationOutTiming={300}
                   backdropTransitionInTiming={300}
                   deviceWidth={Layout.window.width+100}
                   backdropTransitionOutTiming={300}>
                <View style={styles.content}>
                    <TouchableOpacity style={[styles.button, {backgroundColor: Colors.success_shade}]} onPress={() => onPress('new-session')}>
                        <Text style={styles.buttonText}>start new session</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor: Colors.primary_shade}]} onPress={() => onPress('break')}>
                        <Text style={styles.buttonText}>take break</Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity style={[styles.button, {backgroundColor: Colors.danger}]} onPress={() => onPress('stop')}>*/}
                    {/*    <Text style={styles.buttonText}>stop</Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>
            </Modal>
        </View>


    );
}


const styles = StyleSheet.create({
    content: {
        display: 'flex',
        backgroundColor: Colors.light,
        paddingHorizontal: 40,
        paddingVertical: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        height: 100,
        marginVertical: 4,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    buttonText: {
        color: Colors.light,
        fontSize: 22,
    },
});
