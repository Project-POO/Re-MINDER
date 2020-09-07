import React from 'react';
import {View, Text, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import styles from './styles'

import check from '../../assets/images/icons/check.png';
import lupa from '../../assets/images/icons/lupa.png';
import post from '../../assets/images/icons/post.png';

function Landing() {
    const {navigate} = useNavigation();

    function navigateToSendingPost() {
        navigate('SendingPost');
    }

    function navigateToSendingCheck() {
        navigate('SendingCheck');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Re-MINDER</Text>
            <View style ={styles.buttonsContainer}>   
                <RectButton onPress={navigateToSendingCheck} style={[styles.button, styles.buttonPrimary]}> 
                    <Image source={check} /> 
                    <Text style ={styles.buttontext1}>CHECKLIST </Text>
                </RectButton>
                
                <RectButton style={[styles.button, styles.buttonSecondary]}> 
                    <Image source={lupa} /> 
                    <Text style ={styles.buttontext2}>PESQUISAR </Text>
                </RectButton>

                <RectButton onPress={navigateToSendingPost} style={[styles.button, styles.buttonTertiary]}>
                    <Image source={post} />
                    <Text style ={styles.buttontext3}>POST-IT </Text>
                </RectButton>
            </View>
        </View>  
    );
    
}
export default Landing;