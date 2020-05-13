import React, {useState, Fragment} from 'react';
import {View, StyleSheet} from 'react-native';

import ProjectIcon from './ProjectIcon';

export default function IconPicker({onIconChange}) {

    const [selectedIcon, setSelectedIcon] = useState(null);
    const IconNames =
        ['book-open-variant', 'soccer', 'run', 'cards-heart',
            'code-braces','file-tree', 'emoticon', 'school', 'food-fork-drink'];
    const onChange = (icon) => {
        setSelectedIcon(icon);
        onIconChange(icon);
    };
    return (
        <Fragment>
            <View style={styles.colorContainer}>
                <ProjectIcon
                    name={'calendar-check'}
                    onIconChange={(icon) => onChange(icon)}
                    isSelected={selectedIcon === null}
                />

                {IconNames.map((name) => (
                    <ProjectIcon
                        name={name}
                        onIconChange={(icon) => onChange(icon)}
                        isSelected={selectedIcon === name}
                    />
                ))}
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    titleStyles: {
        color: 'black',
    },
    colorContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
