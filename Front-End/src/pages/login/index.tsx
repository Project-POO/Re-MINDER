import React, {useState} from 'react';
import {View, TextInput, Image, CheckBox} from 'react-native';

import reMinder from '../../assets/images/logo/Logo.png';

import styles from './sytles'

function Login (){
    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Image source = {reMinder}/>
            </View>
        </View>
    );
}
export default Login;