import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import StartButton from '../../components/buttons/StartButton';
import CurrentProjectModal from '../../components/modals/CurrentProjectModal';
import User from '../../user/User';
import Colors from '../../helpers/Colors';
import Time from '../../helpers/Time';
import LevelProgressBar from '../../components/LevelProgressBar';


export default function HomeScreen() {
    const [todayWork, setTodayWork] = useState(0);

    return (
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: Colors.light_tint}}>
            <View style={{height: '50%'}}>
            <StartButton addToTodayWork={() => setTodayWork(todayWork + User.currentProject.duration)}/>
        </View>

            <View style={{height: '50%'}}>
                <View style={[styles.details, styles.currentProject]}>
                    <CurrentProjectModal/>
                </View>
                <View style={[styles.details, styles.todayWorkDetails]}>
                    <Text style={styles.textDetails}>Total Today Work: {Time.Min2HrsMins(todayWork)}</Text>
                </View>
                <View style={{height: '10%'}} >
                    <LevelProgressBar/>
                    {/*<Text style={styles.textDetails}>Current Level {User.currentLevel}</Text>*/}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    currentProject: {
        backgroundColor: Colors.primary,
    },
    todayWorkDetails: {
        backgroundColor: Colors.medium,
    },

    currentLevel: {
        backgroundColor: Colors.tertiary,
    },

    details: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDetails: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light,
    },

    levelProgressBar: {
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 32,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    progressBar: {
        flexDirection: 'row',
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
    },
});

