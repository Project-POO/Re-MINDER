import React, {useState} from 'react';
import {View, TextInput, Image,Text, FlatList, SafeAreaView, ScrollView, Alert, Keyboard} from 'react-native';
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

    async function addTask() {
        const search = task.filter(task => task === newTask);
    
        if (search.length !== 0) {
          Alert.alert("Atenção", "Nome da tarefa repetido!");
          return;
        }     

        setTask([...task, newTask]);
        setNewTask("");
    
        Keyboard.dismiss();
              
        }

    async function removeTask(item: any) {
        Alert.alert(
          "Deletar Task",
          "Tem certeza que deseja remover esta anotação?",
          [
            {
              text: "Cancel",
              onPress: () => {
                return;
              },
              style: "cancel"
            },
            {
              text: "OK",
              onPress: () => setTask(task.filter(tasks => tasks !== item))
            }
          ],
          { cancelable: false }
        );
      }

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
                                <RectButton onPress={() => removeTask(item)} 
                                style={styles.buttonBar}>   
                                    <Image source={deleteIcon} /> 
                                </RectButton>
                        </View>
              )}
            />
                </ScrollView>
                <View style={styles.buttonContainer}> 
                    <RectButton style={styles.buttonSave} onPress={() => saveTask()}//Botão para Salvar
                    >   
                        <Image source={SaveIcon} /> 
                    </RectButton> 

                    <RectButton  onPress={() => addTask()} style={styles.buttonAdd}>
                    <Image source={AddIcon} />
                    </RectButton>

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