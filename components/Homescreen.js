import React, { useEffect, useState, Component } from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet, StatusBar } from 'react-native';
import { Button, View, ActivityIndicator, Text } from "react-native";


export default function Homescreen({route}) {
    const Spinner = () => (
        <View style={styles.activityContainer}>
            <Text>Loading..</Text>
            <ActivityIndicator size="large" color={'#5040ff'} />
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={{ height: "100%", width: "100%", }}>
                <WebView
                   bounces={false}
                   startInLoadingState={true}
                   renderLoading={Spinner}
                   sharedCookiesEnabled={true}
                   thirdPartyCookiesEnabled={true}
                   setSupportMultipleWindows={false}// for disable open pop up link
                   javaScriptEnabled={true}
                   javaScriptEnabledAndroid={true}
                   javaScriptCanOpenWindowsAutomatically={true}
                   domStorageEnabled={true}
                    source={{ uri: `${route.params.paramHost}/v1/pusher` }}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // paddingTop: Platform.OS === 'android' ? 8 : '12%',
        backgroundColor: '#121212'
    },
    activityContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    }
});
