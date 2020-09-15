import React, {useState} from 'react';
import {View, TextInput, Image, CheckBox} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import VectorIcon from '../../assets/images/icons/Vector.png';
import SaveIcon from '../../assets/images/icons/Save.png';
import AddIcon from '../../assets/images/icons/plus.png';

import styles from './styles'; 



function SendingPost () {
    const[textTitle, onChangeTitle] = useState(''); //const para
    const[textDate, onChangeDate] = useState(''); //o TextInput
    const[textPost, onChangePost] = useState('');

    const {navigate} = useNavigation();

    function navigateToLandingPage() {
        navigate('LandingPage');
    }

    const AddTextInput = () => {
        return (
            <TextInput style={styles.postText} //Texto do Post-it
                editable = {true}
                multiline = {true}
                placeholderTextColor ="#708090"
                onChangeText = {text => onChangePost(text)}
                defaultValue = {textPost}
            />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.headpostShadow}>
            <View style={styles.headpostContainer}>
                <TextInput style={styles.headpostTitle} //Título
                placeholder = "Título "
                placeholderTextColor ="#708090"
                onChangeText={text => onChangeTitle(text)}
                defaultValue={textTitle}
                /> 
                <TextInput style={styles.headpostDate}  //Data
                placeholder = "dia/mês/ano "
                keyboardType = "numeric"
                placeholderTextColor ="#708090"
                onChangeText={text => onChangeDate(text)}
                defaultValue={textDate}
                />
                <AddTextInput/>
            </View>
            </View>
            <View style={styles.postContainerShadow}>
            <View style= {styles.postContainer}>
                
                <View style={styles.buttonContainer}> 
                    <RectButton style={styles.buttonSave} //Botão para Salvar
                    >   
                        <Image source={SaveIcon} /> 
                    </RectButton> 

                    <RectButton style={styles.buttonAdd} //Botão para adicionar
                    >
                        <Image source={AddIcon} />
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