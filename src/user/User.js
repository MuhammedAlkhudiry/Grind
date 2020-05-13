import AsyncStorage from '@react-native-community/async-storage';
import Settings from './Settings';
import Project from './Project';
import Colors from '../helpers/Colors';

// TODO: dev-line
AsyncStorage.clear();
export default class User {
    static currentLevel = 0;
    static projects = [];
    static currentProject = new Project();
    static stats: Object;
    static isSettingsChanged = false;
    static settings = new Settings();

    static async updateSetting(settingName, newSetting) {
        User.isSettingsChanged = true;
        User.settings[settingName] = newSetting;
        await User.storeSettingInStorage(settingName, newSetting);
    }

    static async setSetting(settingName, newSetting) {
        User.settings[settingName] = newSetting;
    }


    //TODO make async to be from load from storage
    static getData(key) {
        console.log(User.projects, key);
        try {
            // if non-string parse it
            return JSON.parse(User.settings[key]);
        } catch (e) {
            // if string return as is
            return User.settings[key];
        }
    }


    static async storeSettingInStorage(settingName, newSetting) {
        typeof newSetting !== 'string' ?
            await AsyncStorage.setItem(settingName, JSON.stringify(newSetting)) :
            await AsyncStorage.setItem(settingName, newSetting);
    }

    static async createProject(projectsAttributes) {
        const project = new Project(projectsAttributes);
        User.projects.push(project);
        await AsyncStorage.setItem('projects', JSON.stringify(User.projects));
        User.setProjects([...User.projects, project]);
    }

    static async updateProject(oldProject, newProjectsAttributes) {
        const newProject = new Project(newProjectsAttributes);
        const foundIndex = User.projects.findIndex(project => project === oldProject);
        User.projects[foundIndex] = newProject;
        await AsyncStorage.setItem('projects', JSON.stringify(User.projects));
        User.setProjects(User.projects);
    }

    static async updateCurrentProject(newProject) {
        User.currentProject = newProject;
        await User.storeSettingInStorage('current_project', JSON.stringify(newProject));
    }

    static async getAllData() {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const result = await AsyncStorage.multiGet(keys);
            return Object.fromEntries(result);
        } catch (error) {
            console.error(error);
        }

    }

    static async saveInitialSettings() {
        await User.storeSettingInStorage('has_launched', true);
        await User.storeSettingInStorage('first_day', 'sunday');
        await User.storeSettingInStorage('default_work_duration', 25);
        await User.storeSettingInStorage('short_break', 5);
        await User.storeSettingInStorage('long_break', 15);
        await User.storeSettingInStorage('long_break_interval', 5);
        await User.storeSettingInStorage('is_casual_mode', false);
    }

    static async loadSettings() {
        User.projects = JSON.parse(await AsyncStorage.getItem('projects')) || [];
        User.currentProject = JSON.parse(await AsyncStorage.getItem('current_project')) || new Project();
        await User.setSetting('first_day', await AsyncStorage.getItem('first_day'));
        await User.setSetting('default_work_duration', await AsyncStorage.getItem('default_work_duration'));
        await User.setSetting('short_break', await AsyncStorage.getItem('short_break'));
        await User.setSetting('long_break', await AsyncStorage.getItem('long_break'));
        await User.setSetting('long_break_interval', await AsyncStorage.getItem('long_break_interval'));
        await User.setSetting('is_casual_mode', await AsyncStorage.getItem('is_casual_mode'));
        await User.setSetting('current_project', await AsyncStorage.getItem('current_project'));
    }

    static async isFirstTimeLaunch() {
        return await AsyncStorage.getItem('has_launched') === null;
    }
}
