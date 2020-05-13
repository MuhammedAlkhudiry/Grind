import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CardButton from '@paraboly/react-native-card-button';
import Colors from '../../helpers/Colors';


export default function PersonalScreen({navigation}) {
    const [isModelVisible, setIsModalVisible] = useState(false);
    return (
        <LinearGradient colors={['#fafcff', '#dde8fb']} style={styles.container}>
            <View style={styles.containerGlue}>
                <View style={styles.buttonContainer}>
                    <View style={styles.rowStyle}>
                        <CardButton
                            width={150}
                            height={150}
                            text="Projects"
                            iconSize={60}
                            iconName="calendar-check"
                            iconColor={Colors.light}
                            textColor={Colors.light}
                            textSize={20}
                            iconType="MaterialCommunityIcons"
                            rippleColor="white"
                            end={{x: 1, y: 1}}
                            start={{x: 0, y: 0}}
                            gradientColors={['#BA5370', '#F4E2D8']}
                            onPress={() => navigation.navigate('Projects')}
                        />
                        <CardButton
                            width={150}
                            height={150}
                            text="Achievements"
                            iconColor={Colors.light}
                            iconSize={60}
                            textColor={Colors.light}
                            textSize={20}
                            iconType="MaterialCommunityIcons"
                            rippleColor="white"
                            iconName="trophy-award"
                            end={{x: 1, y: 0}}
                            start={{x: 0, y: 1}}
                            gradientColors={['#a8c0ff', '#3f2b96']}
                        />
                    </View>
                    <View style={styles.rowStyle}>
                        <CardButton
                            width={150}
                            height={150}
                            text="Level"
                            iconSize={60}
                            iconColor={Colors.light}
                            textColor={Colors.light}
                            textSize={20}
                            rippleColor="white"
                            iconName="chevron-triple-up"
                            end={{x: 0, y: 1}}
                            start={{x: 1, y: 0}}
                            iconType="MaterialCommunityIcons"
                            gradientColors={['#C6426E', '#642B73']}
                        />
                        <CardButton
                            width={150}
                            height={150}
                            text="Cloud"
                            iconName="cloud"
                            iconColor={Colors.light}
                            iconSize={60}
                            textColor={Colors.light}
                            textSize={20}
                            iconType="Feather"
                            rippleColor="white"
                            end={{x: 1, y: 1}}
                            start={{x: 0, y: 0}}
                            gradientColors={['#c94b4b', '#4b134f']}
                        />
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    containerGlue: {
        flex: 1,
        marginTop: '25%',
        flexDirection: 'column',
    },
    buttonContainer: {
        height: 350,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    logoStyle: {
        height: 150,
        width: 350,
    },
    rowStyle: {
        width: 350,
        alignSelf: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
    },

    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },

});
