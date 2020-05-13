import SwitchToggle from '@dooboo-ui/native-switch-toggle';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../helpers/Colors';
import User from '../../user/User';

export default function SettingsCheckbox(props) {

    const [switchOn2, setSwitchOn2] = useState(false);

    return (
        <View style={styles.setting}>
            <View>
                <Text style={styles.settingTitle}>
                    {props.title}: {User.getData(props.settingName)}
                </Text>
            </View>
            <View style={{marginLeft: 'auto'}}>
                <SwitchToggle
                    containerStyle={{
                        width: 60,
                        height: 30,
                        borderRadius: 30,
                        padding: 5,
                    }}
                    backgroundColorOn={Colors.primary_light}
                    backgroundColorOff={Colors.step_900}
                    circleStyle={{
                        width: 22,
                        height: 22,
                        borderRadius: 27.5,
                        backgroundColor: 'blue', // rgb(102,134,205)
                    }}
                    switchOn={switchOn2}
                    onPress={() => setSwitchOn2(!switchOn2)}
                    circleColorOff={Colors.step_950}
                    circleColorOn={Colors.primary}
                    duration={250}/>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    setting: {
        flex: 1,
        flexDirection: 'row',

    },

    settingTitle: {
        fontFamily: 'Tajawal-Bold',
        fontSize: 18,
        alignSelf: 'center'

    },
});


