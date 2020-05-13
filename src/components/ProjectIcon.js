import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../helpers/Colors';


export default function ProjectIcon({name, isSelected, onIconChange}) {
    return (
        <TouchableOpacity onPress={() => onIconChange(name)} style={[styles.colorOption, {borderColor: isSelected ? Colors.primary : Colors.medium}]}>
            <Icon name={name} size={25} color={isSelected ? Colors.primary : Colors.medium_tint}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    colorOption: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        marginHorizontal: 12,
        marginVertical: 12,
        borderRadius: 10,
    },
});
