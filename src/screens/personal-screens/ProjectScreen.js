import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert, TextInput} from 'react-native';
import Colors from '../../helpers/Colors';
import {Fumi} from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorPalette from 'react-native-color-palette';
import User from '../../user/User';
import SettingsSlider from '../../components/settings/SettingsSlider';
import IconPicker from '../../components/IconPicker';
import HR from '../../components/HR';
import {ModernHeader} from '@freakycoder/react-native-header-view';


export default function ProjectScreen({navigation, route}) {
    const project = route.params;
    const [errorMsg, setErrorMsg] = useState('');
    const [inputs, setInputs] = useState(project);

    const updateProject = () => {
        if (checkInvalidForms() === true) {
            User.updateProject(project, inputs);
            navigation.goBack();
        }
    };

    const checkInvalidForms = () => {
        for (let [key, value] of Object.entries(inputs)) {
            if (value === '') {
                setErrorMsg(`the "${key}" is missing`);
                return key;
            }
        }
        // all forms are valid
        return true;
    };

    const onInputChange = (key, value) => {
        setInputs({
            ...inputs,
            [key]: value,
        });
    };


    return (
        <View style={styles.container}>
            <ModernHeader
                backgroundColor={Colors.light}
                text="edit Project"
                textStyle={{fontSize: 28, fontWeight: 'bold', fontFamily: 'Tajawal-Bold'}}
                leftIconSize={28}
                rightIconSize={0}
                leftIconOnPress={() => navigation.goBack()}
            />
            <ScrollView contentContainerStyle={styles.content}>
                <View style={[styles.formContainer]}>
                    <Fumi
                        style={inputs['name'].length < 1 ? styles.invalidForm : styles.validForm}
                        onChangeText={text => onInputChange('name', text)}
                        iconClass={Icon}
                        label='Project Name'
                        value={inputs['name']}
                        labelStyle={{opacity: .7}}
                        iconName={'calendar-check'}
                        iconColor={Colors.primary}
                        iconSize={30}
                        iconWidth={70}
                        inputPadding={24}/>
                </View>
                <HR/>
                <View style={styles.formContainer}>
                    <View style={styles.textAreaContainer}>
                        <TextInput
                            multiline
                            style={styles.textInputStyle}
                            onChangeText={text => onInputChange('desc', text)}
                            defaultValue={inputs['desc']}
                        />
                    </View>
                </View>
                <HR/>
                <View style={styles.formContainer}>
                    <SettingsSlider onChange={onInputChange}
                                    title='work session duration'
                                    settingName='duration'
                                    initialValue={inputs['duration']}/>
                </View>
                <HR/>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Project Color</Text>
                    <ColorPalette
                        onChange={color => onInputChange('color', color)}
                        defaultColor={Colors.primary}
                        colors={[
                            Colors.danger, '#E74C3C', '#8E44AD', Colors.primary, Colors.success,
                            '#16A085', '#2ECC71', '#F1C40F', Colors.warning, '#D35400',
                            '#7F8C8D', '#34495E', Colors.dark,
                        ]}
                        title={''}
                        icon={<Icon
                            name={'circle'}
                            size={15}
                            color={Colors.dark_tint}
                            style={{
                                width: 16,
                                height: 16,
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: Colors.step_700,
                            }}
                        />
                        }
                    />
                </View>
                <HR/>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Project Icon</Text>

                    <IconPicker
                        onIconChange={icon => onInputChange('icon', icon)}/>
                </View>
                <Text style={styles.error}>{errorMsg === '' ? '' : errorMsg}</Text>
                <View style={styles.formContainer}>
                    <TouchableOpacity style={[styles.button, styles.createButton]} onPress={updateProject}>
                        <Text style={styles.buttonText}>edit Project</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    content: {
        display: 'flex',
        backgroundColor: Colors.light,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 10,
        paddingVertical: 20,

    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical: 15,
    },

    validForm: {},

    invalidForm: {
        borderColor: Colors.danger,
        borderWidth: 1,
    },

    title: {
        textAlign: 'center',
        fontFamily: 'Tajawal-Bold',
        fontSize: 18,
    },
    button: {
        borderRadius: 6,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 5,
    },

    createButton: {
        height: 70,
        width: 180,
        backgroundColor: Colors.primary_tint,
    },
    cancelButton: {
        backgroundColor: Colors.danger,
        height: 50,
        width: 140,
    },


    buttonText: {
        color: Colors.light,
        textAlign: 'center',
        fontSize: 20,
    },

    error: {
        color: Colors.danger,
        fontSize: 14,
        fontFamily: 'Tajawal-Bold',
        textAlign: 'center',
    },

    textAreaContainer: {
        width: "100%",
        height: 100,
        backgroundColor: "#fff",
        textAlignVertical: 'top',
    },

    textInputStyle: {
        height: "90%",
        backgroundColor: 'transparent',
        marginHorizontal: 16,
    },

});
