import React, {useState} from 'react';
import {View, TextInput, Image,Text, FlatList, SafeAreaView, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import VectorIcon from '../../assets/images/icons/Vector.png';
import SaveIcon from '../../assets/images/icons/Save.png';
import AddIcon from '../../assets/images/icons/plus.png';
import deleteIcon from '../../assets/images/icons/delete.png'

import styles from './styles';
import api from '../../services/api';

function SendingPost () {
    const [textTitle, onChangeTitle] = useState(''); //const para
    const [textDate, onChangeDate] = useState(''); //o TextInput
    
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    async function saveTask() {

      await api.post("checklist", {
        title: textTitle,
        valor: JSON.stringify(task),
        check: true
      });
    }

    const { goBack} = useNavigation();
    
    function handleNavigateBack() {
        goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
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
                <View style={styles.form}>
                <TextInput
                style={styles.checkText}
                autoCorrect={true}
                value={newTask}
                onChangeText={text => setNewTask(text)}
                />
                </View>
                <ScrollView>
                <FlatList
                    data={task}
                    keyExtractor={item => item.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.form} >
                            <Text style={styles.item}>{item}</Text>
                        </View>
              )}
            />
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <RectButton onPress={handleNavigateBack} style={styles.buttonVec} //Botão para Voltar
                    >
                        <Image source={VectorIcon} />
                    </RectButton>
                </View>
            </View>
            </View>
        </SafeAreaView>
    );   
}

export default SendingPost;