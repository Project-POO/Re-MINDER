import React, {useEffect, useState} from 'react';
import {View, TextInput, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import VectorIcon from '../../assets/images/icons/Vector.png';
import SaveIcon from '../../assets/images/icons/Save.png';

import styles from './styles';
import api from '../../services/api';

function SendingPost () {
    const[textTitle, onChangeTitle] = useState(''); //const para
    const[textDate, onChangeDate] = useState(''); //o TextInput
    const[textPost, onChangePost] = useState('');

    const {navigate} = useNavigation();

    function navigateToLandingPage() {
        navigate('LandingPage');
    }
    function SavePostit(){
        api.post('postIt', {
            title: textTitle,
            content: textPost
        }).then(() => {
            
            navigateToLandingPage()
        }).catch(() => {
            alert('faiou')
        })

        // console.log({
        //     textTitle,
        //     textPost,
        // })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headpostShadow}>
            <View style={styles.headpostContainer}>
                <TextInput style={styles.headpostTitle} //Título
                placeholder = "Título "
                keyboardType ="default"
                placeholderTextColor ="#708090"
                onChangeText={text => onChangeTitle(text)}
                defaultValue={textTitle}
                /> 
                <TextInput style={styles.headpostDate}  //Data
                placeholder = "dia/mês/ano "
                keyboardType ="phone-pad"
                placeholderTextColor ="#708090"
                onChangeText={text => onChangeDate(text)}
                defaultValue={textDate}
                />
            </View>
            </View>
            <View style={styles.postContainerShadow}>
            <View style= {styles.postContainer}>
                <TextInput style={styles.postText} //Texto do Post-it
                multiline={true}
                numberOfLines={50}
                placeholder = "Digite o Texto aqui! "
                placeholderTextColor ="#708090"
                onChangeText={text => onChangePost(text)}
                defaultValue={textPost}
                />
                <View style={styles.buttonContainer}> 
                    <RectButton onPress={SavePostit} style={styles.buttonSave} //Botão para Salvar 
                    > 
                        <Image source={SaveIcon}/> 
                        
                    </RectButton> 
                    <RectButton onPress={navigateToLandingPage} style={styles.buttonVec} //Botão para Voltar
                    >
                        <Image source={VectorIcon} />
                    </RectButton>
                </View>
            </View>
            </View>
        </View>
    );   
}

export default SendingPost;