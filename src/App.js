import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import User from './user/User';
import BottomTabs from './components/tabs/BottomTabs';

export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                console.log(await User.isFirstTimeLaunch());
                if (await User.isFirstTimeLaunch()) {
                    await User.saveInitialSettings();
                } else {
                    await User.loadSettings();
                }

                setIsLoaded(true);
            } catch (e) {
                console.warn(e);
            }
        })();
    }, []);


    return (
        <View style={styles.container}>
            {isLoaded ? <BottomTabs/> : <Text style={{fontSize: 16}} numberOfLines={1}> loading </Text>}
        </View>
    );

}

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = {
    fontFamily: 'Tajawal-Medium',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
