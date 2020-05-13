import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../helpers/Colors';
import Slider from '@react-native-community/slider';

export default function SettingsSlider({onChange, title, settingName, initialValue}) {
    const [value, setValue] = useState(initialValue);
    return (
        <View>
            <View>
                <Text style={styles.settingTitle}>{title}</Text>
            </View>

            <View style={styles.setting}>
                <Slider
                    style={{width: 350, height: 50}}
                    minimumValue={5}
                    maximumValue={120}
                    minimumTrackTintColor={Colors.primary_tint}
                    maximumTrackTintColor={Colors.medium}
                    thumbTintColor={Colors.primary_shade}

                    step={5}
                    onValueChange={(value) => {
                        setValue(value);
                        onChange(settingName, value);
                    }}
                    value={value}
                />
                <Text>{value} minutes</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    setting: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    settingTitle: {
        fontFamily: 'Tajawal-Bold',
        fontSize: 18,
        textAlign: 'center',
    }

});
