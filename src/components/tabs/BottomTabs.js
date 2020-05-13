import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/main-screens/HomeScreen';
import PersonalScreen from '../../screens/main-screens/PersonalScreen';
import StatisticsScreen from '../../screens/main-screens/StatisticsScreen';
import SettingsScreen from '../../screens/main-screens/SettingsScreen';
import ProjectsScreen from '../../screens/personal-screens/ProjectsScreen';

import TabBarIcon from '../TabBarIcon';
import CreateProjectScreen from '../../screens/personal-screens/CreateProjectScreen';
import ProjectScreen from '../../screens/personal-screens/ProjectScreen';

const Tab = createBottomTabNavigator();
const PersonalStack = createStackNavigator();

function PersonalStackScreen() {
    return (
        <PersonalStack.Navigator>
            <PersonalStack.Screen options={{headerShown: false}} name="Home" component={PersonalScreen}/>
            <PersonalStack.Screen options={{headerShown: false}} name="Projects" component={ProjectsScreen}/>
            <PersonalStack.Screen options={{headerShown: false}} name="CreateProject" component={CreateProjectScreen}/>
            <PersonalStack.Screen options={{headerShown: false}} name="Project" component={ProjectScreen}/>
        </PersonalStack.Navigator>
    );
}

export default function BottomTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Home',
                        tabBarIcon: ({focused}) =>
                            <TabBarIcon name="home" focused={focused}/>,
                    }}
                />
                <Tab.Screen
                    name="Personal"
                    component={PersonalStackScreen}
                    options={{
                        title: 'Personal',
                        tabBarIcon: ({focused}) =>
                            <TabBarIcon name="emoticon" focused={focused}/>,
                    }}
                />
                <Tab.Screen name="Statistics"
                            component={StatisticsScreen}
                            options={{
                                title: 'Statistics',
                                tabBarIcon: ({focused}) =>
                                    <TabBarIcon name="chart-areaspline" focused={focused}/>,
                            }}
                />
                <Tab.Screen name="Settings"
                            component={SettingsScreen}
                            options={{
                                title: 'settings',
                                tabBarIcon: ({focused}) =>
                                    <TabBarIcon name="settings" focused={focused}/>,
                            }}
                />
            </Tab.Navigator>

        </NavigationContainer>
    );
}


