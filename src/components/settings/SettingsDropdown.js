import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../helpers/Colors';
import Menu, {MenuItem} from 'react-native-material-menu';
import User from '../../user/User';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SettingsDropdown extends React.Component {
    menu = null;

    constructor(props) {
        super(props);
    }

    setMenuRef = ref => this.menu = ref;
    showMenu = () => this.menu.show();
    hideMenu = (option) => {
        this.props.onChange(this.props.settingName, option);
        this.menu.hide();
    };


    render() {
        return (
            <View style={styles.setting}>
                <View>
                    <Text onPress={this.showMenu} style={styles.settingTitle}>
                        {this.props.title}: {User.getData(this.props.settingName)}
                    </Text>
                </View>
                <View style={{marginLeft: 'auto'}}>
                    <Menu
                        ref={this.setMenuRef}
                        button={
                            <Icon
                                onPress={this.showMenu}
                                name={'calendar'}
                                size={26}
                                color={Colors.primary}
                            />
                        }
                    >
                        {this.props.options.map(option =>
                            <MenuItem onPress={() => this.hideMenu(option)}>{option}</MenuItem>)}

                    </Menu>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    setting: {
        flex: 1,
        flexDirection: 'row',
    },

    settingTitle: {
        fontFamily: 'Tajawal-Bold',
        fontSize: 18,
    },

});
