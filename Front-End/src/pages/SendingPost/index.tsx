import React, {useState} from 'react';
import {View, TextInput, Image, ScrollView} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import VectorIcon from '../../assets/images/icons/Vector.png';
import SaveIcon from '../../assets/images/icons/Save.png';

import styles from './styles';

function SendingPost () {
    const[textTitle, onChangeTitle] = useState(''); //const para
    const[textDate, onChangeDate] = useState(''); //o TextInput
    const[textPost, onChangePost] = useState('');

    const {navigate} = useNavigation();

    function navigateToLandingPage() {
        navigate('LandingPage');
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
                <ScrollView>
                <TextInput 
                style={styles.postText}
                textAlignVertical = "top"
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}//Texto do Post-it
                multiline={true}
                numberOfLines={40}
                onChangeText={text => onChangePost(text)}
                defaultValue={textPost}
                />
                </ScrollView>
                <View style={styles.buttonContainer}> 
                    <RectButton style={styles.buttonSave} //Botão para Salvar
                    >   
                        <Image source={SaveIcon} /> 
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