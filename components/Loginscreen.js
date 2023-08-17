import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Loginscreen({ navigation }) {
    const [serverHost, setserverHost] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        getSession();
    }, []);

    const getSession = () => {
        try {
            AsyncStorage.getItem(keyServer).then(value => {
                if (value != null) {
                    setserverHost(value);
                } else {
                    setserverHost('');
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const hostURL = `${serverHost}`;
    const login = () => {
        setIsLoading(true);
        fetch(`${serverHost}/ping.json`)
        .then((response) => response.json())
        .then((json) => {
            if(json[0].msg=='ok'){
                saveServer(hostURL);
                navigation.replace("HOME", { paramHost: hostURL });
            }
        })
        .catch((error) => { alert(error) })
        .finally(() => setIsLoading(false));
    }

    const keyServer = 'keyServer';
    const saveServer = async jsonValue => {
        try {
            await AsyncStorage.setItem(keyServer, jsonValue);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>LUCKY DRAW REMOTE</Text>
            <Text style={{ marginBottom: 20 }}>Digital Solution</Text>
            <TextInput
                onChangeText={(serverHost) => setserverHost(serverHost.toLowerCase())}
                value={serverHost}
                placeholder={'Server Host ex: http://ip or https://xyz.com'} style={styles.input} />
            {isLoading ? (
                <TouchableOpacity onPress={login} style={styles.button}>
                    <ActivityIndicator />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={login} style={styles.button}>
                    <Text style={{ color: '#fff' }}> CONNECT</Text>
                </TouchableOpacity>
            )}
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 15, bottom: 0, marginTop: 15 }}>
                <Text style={{ fontSize: 14 }}>Copyright © {(new Date().getFullYear())}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        paddingTop: '30%',
        padding: 25
    },
    input: {
        width: '100%',
        height: 44,
        padding: 10,
        marginTop: 8,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
    },
    button: {
        color: '#fff',
        backgroundColor: "#025ef2",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 20,
        padding: 10,
    },
    button_register: {
        color: '#fff',
        backgroundColor: "#d1b200",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 15,
        padding: 10,
    },
    tinyLogo: {
        width: 200,
        height: 100,
        alignItems: "center",
        margin: 5,
        resizeMode: 'contain',
    },
})