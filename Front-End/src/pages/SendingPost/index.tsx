import React, {useState} from 'react';
import {View, TextInput, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import VectorIcon from '../../assets/images/icons/Vector.png';
import SaveIcon from '../../assets/images/icons/Save.png';

import styles from './styles';

function SendingPost () {
    const[textTitle, onChangeTitle] = useState(''); //const para
    const[textDate, onChangeDate] = useState(''); //o TextInput
    const[textPost, onChangePost] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.headpostShadow}>
            <View style={styles.headpostContainer}>
                <TextInput style={styles.headpostTitle} //Título
                placeholder = "Title "
                placeholderTextColor ="#000"
                onChangeText={text => onChangeTitle(text)}
                defaultValue={textTitle}
                /> 
                <TextInput style={styles.headpostDate}  //Data
                placeholder = "Month/day "
                placeholderTextColor ="#000"
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
                placeholderTextColor ="#000"
                onChangeText={text => onChangePost(text)}
                defaultValue={textPost}
                />
                <View style={styles.buttonContainer}> 
                    <RectButton style={styles.buttonSave} //Botão para Salvar
                    >   
                        <Image source={SaveIcon} /> 
                    </RectButton> 
                    <RectButton style={styles.buttonVec} //Botão para Voltar
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