import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import User from '../../user/User';
import Modal from 'react-native-modal';
import Colors from '../../helpers/Colors';


export default function CurrentProjectModal() {

    const [currentProject, setCurrentProject] = useState(User.currentProject ? User.currentProject.name : 'none');
    const [projects, setProjects] = useState(User.projects ? User.projects : []);
    User.setProjects = setProjects;
    const [chooseProjectVisible, setChooseProjectVisible] = useState(false);
    const [scrollOffset, setScrollOffset] = useState(null);

    const scrollViewRef = React.createRef();
    const handleOnScroll = event => setScrollOffset(event.nativeEvent.contentOffset.y);
    const showModel = () => setChooseProjectVisible(!chooseProjectVisible);
    const close = () => setChooseProjectVisible(false);

    const handleScrollTo = p => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo(p);
        }
    };

    const changeCurrentProject = (project) => {
        setCurrentProject(project.name);
        User.updateCurrentProject(project);
        close();
    };

    return (
        <View>
            <Modal isVisible={chooseProjectVisible}
                   onSwipeComplete={close}
                   onBackdropPress={close}
                   swipeDirection={['down']}
                   scrollTo={handleScrollTo}
                   scrollOffset={null}
                   scrollOffsetMax={500 - 100} // content height - ScrollView height
                   propagateSwipe={true}
                   style={styles.modal}>
                <View>
                    <View style={styles.scrollableModal}>
                        <ScrollView
                            ref={scrollViewRef}
                            onScroll={handleOnScroll}
                            scrollEventThrottle={16}>
                            {projects.map(project =>
                                <TouchableOpacity onPress={() => changeCurrentProject(project)} key={project.id} style={[styles.scrollableModalContent]}>
                                    <Text style={[styles.scrollableModalText]}>
                                        {project.name}
                                    </Text>
                                </TouchableOpacity>,
                            )}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={[styles.textContainer]} onPress={showModel}>
                <Text style={[styles.textDetails, styles.title]}>Current Project</Text>
                <Text style={[styles.textDetails, styles.details]}>{currentProject}</Text>
            </TouchableOpacity>
            <Text style={styles.textHelper}>Click to change current project</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },

    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        borderBottomColor: Colors.dark,
        borderBottomWidth: 4,
        marginHorizontal: 20,
    },

    textDetails: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light,

    },
    details: {
        marginLeft: 20,

    },

    textHelper: {
        fontSize: 12,
        color: Colors.light,

    },
    scrollableModal: {
        height: 500,
    },
    scrollableModalContent: {
        height: 100,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Colors.secondary,
        borderBottomWidth: 2, fontSize: 20,

    },
    scrollableModalText: {
        color: Colors.dark,
    },
});
