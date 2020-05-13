import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ActionButton from 'react-native-action-button';
import Colors from '../../helpers/Colors';
import ProjectCard from '../../components/cards/ProjectCard';
import User from '../../user/User';
import {ModernHeader} from '@freakycoder/react-native-header-view';

export default function ProjectsScreen({navigation}) {

    return (
        <View style={styles.container}>
            <ModernHeader
                backgroundColor={Colors.light}
                text="Projects"
                textStyle={{fontSize: 28, fontWeight: 'bold', fontFamily: 'Tajawal-Bold'}}
                leftIconSize={28}
                rightIconSize={0}
                leftIconOnPress={() => navigation.goBack()}
            />
            <ScrollView>
                {User.projects.map(project =>
                    <View style={{margin: 10}}>
                        <ProjectCard project={project} onPress={() => navigation.navigate('Project', project)}/>
                    </View>,
                )}

            </ScrollView>
            <ActionButton onPress={() => navigation.navigate('CreateProject')} buttonColor={Colors.primary}>
            </ActionButton>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },

});
