import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = require('../images/splash.png');

export default function SplashScreen({ navigation }) {
    const keyServer = 'keyServer';
    useEffect(() => {
        const refreshIntervalId = setInterval(() => {
            clearInterval(refreshIntervalId);
            navigation.replace("LOGIN");
        }, 1800);

    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});


