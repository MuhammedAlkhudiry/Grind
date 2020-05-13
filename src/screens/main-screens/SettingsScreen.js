import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ModernHeader} from '@freakycoder/react-native-header-view';
import Colors from '../../helpers/Colors';
import User from '../../user/User';
import SettingsSlider from '../../components/settings/SettingsSlider';
import SettingsDropdown from '../../components/settings/SettingsDropdown';
import SettingsCheckbox from '../../components/settings/SettingsCheckbox';
import Layout from '../../helpers/Layout';
import HR from '../../components/HR';

export default function SettingsScreen() {

    const onChange = (settingName, newSetting) => {
        User.updateSetting(settingName, newSetting);
        if (settingName === 'default_work_duration') {
            User.setRemainingSecs(newSetting);
        }
    };

    return (
        <View>
            <ModernHeader
                backgroundColor={Colors.light}
                text="Settings"
                textStyle={{fontSize: 28, fontWeight: 'bold', fontFamily: 'Tajawal-Bold'}}
                leftIconSize={0}
                rightIconSize={0}
            />
            <ScrollView style={styles.container}>
                <View style={[styles.settingRow, styles.settingSlider]}>
                    <SettingsSlider onChange={onChange}
                                    title='Default Work Duration'
                                    settingName='default_work_duration'
                                    initialValue={User.getData('default_work_duration')}/>
                </View>
                <HR/>
                <View style={[styles.settingRow, styles.settingSlider]}>
                    <SettingsSlider onChange={onChange}
                                    title='Short-break Duration'
                                    settingName='short_break'
                                    initialValue={User.getData('short_break')}/>
                </View>
                <HR/>
                <View style={[styles.settingRow, styles.settingSlider]}>
                    <SettingsSlider onChange={onChange}
                                    title='Long-break Work Duration'
                                    settingName='long_break'
                                    initialValue={User.getData('long_break')}/>
                </View>
                <HR/>
                <View style={[styles.settingRow]}>
                    <SettingsDropdown onChange={onChange}
                                      title='Start Week'
                                      options={['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']}
                                      settingName='first-day-week'/>
                </View>
                <View style={[styles.settingRow]}>
                    <SettingsCheckbox onChange={onChange} title='casual mode' settingsName='is-casual-mode'/>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light_tint,
    },
    settingRow: {
        padding: 15,
    },
    hrContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    hr: {
        backgroundColor: Colors.medium,
        height: 1,
        width: Layout.window.width - 25,
    },
    settingSlider: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

    setting: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});
