import React, {useState} from 'react';
import {View, TextInput, Image,Text, FlatList, SafeAreaView, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import VectorIcon from '../../assets/images/icons/Vector.png';
import SaveIcon from '../../assets/images/icons/Save.png';
import AddIcon from '../../assets/images/icons/plus.png';

import styles from './styles';

function SendingPost () {
    const [textTitle, onChangeTitle] = useState(''); //const para
    const [textDate, onChangeDate] = useState(''); //o TextInput
    const [task, updateTask] = useState('');
    const [tasks, updateTasks] = useState([]);
  
    const handleAdd = () => {
        if (task.trim()) {
          updateTasks([...tasks, task]);
          updateTask('');
        }
      };

     const handleRenderTask = ({item}) => <Text style={styles.item}>{item}</Text>;

    const {navigate} = useNavigation();

    function navigateToLandingPage() {
        navigate('LandingPage');
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
                style={styles.field}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                onChangeText={text => updateTask(text)}
                value={task}
                />
                </View>
                <ScrollView>
                <FlatList
                data={tasks}
                keyExtractor={item => item}
                renderItem={handleRenderTask}
                />
                </ScrollView>
                <View style={styles.buttonContainer}> 
                    <RectButton style={styles.buttonSave} //Botão para Salvar
                    >   
                        <Image source={SaveIcon} /> 
                    </RectButton> 

                    <RectButton onPress={handleAdd} style={styles.buttonAdd}>
                    <Image source={AddIcon} />
                    </RectButton>

                    <RectButton onPress={navigateToLandingPage} style={styles.buttonVec} //Botão para Voltar
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