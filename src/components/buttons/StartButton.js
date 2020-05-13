import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import Colors from '../../helpers/Colors';
import User from '../../user/User';
import SessionFinishedModal from '../modals/SessionFinishedModal';

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return {mins: formatNumber(mins), secs: formatNumber(secs)};
};


export default function StartButton({addToTodayWork}) {

    const [remainingSecs, setRemainingSecs] = useState(User.currentProject.duration * 60);
    User.setRemainingSecs = setRemainingSecs;
    const [isActive, setIsActive] = useState(false);
    const [isWorkFinished, seIstWorkFinished] = useState(false);
    const {mins, secs} = getRemaining(remainingSecs);

    const toggle = () => isActive ? reset() : setIsActive(!isActive);

    const reset = () => {
        setIsActive(false);
        setRemainingSecs(User.currentProject.duration * 60);
    };

    const afterWorkSession = (buttonPressed) => {
        addToTodayWork();
        setIsActive(false);

        switch (buttonPressed) {
            case 'break':
                setRemainingSecs(User.getData('short_break') * 60);
                setIsActive(true);
                break;
            case 'new-session':
                setRemainingSecs(User.currentProject.duration * 60);
                setIsActive(true);
                break;
            case 'stop':
                setRemainingSecs(User.currentProject.duration * 60);
                break;
        }

        setTimeout(() => seIstWorkFinished(false), 200);
    };

    useEffect(() => {
        let interval = null;
        if (remainingSecs !== 0 && isActive) {
            interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs - 1);
            }, 1000);
            //    finished
        } else if (remainingSecs === 0) {
            clearInterval(interval);
            setTimeout(() => seIstWorkFinished(true), 1500);
        }
        return () => clearInterval(interval);
    }, [isActive, remainingSecs]);


    return (
        <View style={styles.container}>
            <SessionFinishedModal visible={isWorkFinished} onPress={afterWorkSession}/>
            <StatusBar barStyle="dark-content"/>
            <Text style={[styles.timerText, {
                color: isActive ? Colors.step_950 : Colors.step_700,
            }]}>{`${mins}:${secs}`}</Text>
            <AwesomeButton
                backgroundColor={isActive ? Colors.danger_tint : Colors.success_tint}
                backgroundDarker={isActive ? Colors.danger_shade : Colors.success_shade}
                hight={300} width={200} padding={35} textSize={30} raiseLevel={15} borderRadius={16}
                onPress={toggle}>{isActive ? 'X' : 'Start'}</AwesomeButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark_shade,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerText: {
        fontSize: 90,
        marginBottom: 20,
    },
});
