import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../helpers/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.primary : Colors.medium}
    />
  );
}
