import React, {useRef, useState, useEffect} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';
import Colors from '../helpers/Colors';

// setInterval custom hook by Dan Abramov
function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}


export default function LevelProgressBar() {
    let animation = useRef(new Animated.Value(0));
    const [progress, setProgress] = useState(0);
    useInterval(() => {
        // update progress until 100
        if (progress < 100) {
            setProgress(progress + 5);
        }
    }, 1000);

    useEffect(() => {
        Animated.timing(animation.current, {
            toValue: progress,
            duration: 100,
            useNativeDriver: false
        }).start();
    }, [progress]);

    const width = animation.current.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.container}>
            {/*<Text>*/}
            {/*    Loading…..*/}
            {/*</Text>*/}
            <View style={styles.progressBar}>
                <Animated.View
                    style={[StyleSheet.absoluteFill, {backgroundColor: Colors.primary_tint, width}]}/>
            </View>
            {/*<Text>*/}
            {/*    {`${progress}%`}*/}
            {/*</Text>*/}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light_shade,
    },
    progressBar: {
        flexDirection: 'row',
        height: 30,
        width: '100%',
        backgroundColor: 'white',
    },
});
