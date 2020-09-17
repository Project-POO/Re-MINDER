import React, { useEffect, useState } from 'react';
import {View, Text, Image, Alert} from 'react-native';
import { RectButton, ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import styles from './styles'

import check from '../../assets/images/icons/check.png';
import deleteIcon from '../../assets/images/icons/delete.png'
import post from '../../assets/images/icons/post.png';
import reMinder from '../../assets/images/logo/LogoSmall.png';
import api from '../../services/api';

function Landing() {
    const {navigate} = useNavigation();

    const [checklists, setChecklists] = useState([]);
    const [postItList, setPostItList] = useState([]);

    function navigateToSendingPost() {
        navigate('SendingPost');
    }

    function navigateToSendingCheck() {
        navigate('SendingCheck');
    }

    async function getChecklist(){
        const {data} = await api.get("checklist");


        const info = data.map(({ check, checklist_id, data, id, title, valor }, index) => {
            if(true){
                let value = JSON.parse(valor).map((item, index) => ({ value: item }));
                
                return ({
                    check, 
                    checklist_id, 
                    data, 
                    id, 
                    title, 
                    valor: value
                });
            }
        }
        );
        console.log(info)
        setChecklists(info);

        
    }
    async function getPost(){
        const {data} = await api.get("postIt");

        setPostItList(data);
    }

    useEffect(() => {
        getChecklist();
        getPost();
    }, [])


    async function removeCheck(item: any) {
        Alert.alert(
          "Deletar Post",
          "Tem certeza que deseja remover?",
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
              onPress: () => setChecklists(checklists.filter( checklists => checklists !== item))
            }
          ],
          { cancelable: false }
        );
      }

      async function removePost(item: any) {
        Alert.alert(
          "Deletar Post",
          "Tem certeza que deseja remover?",
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
              onPress: () => setPostItList(postItList.filter( postItList => postItList !== item))
            }
          ],
          { cancelable: false }
        );
      }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
             <Image source={reMinder}/>
            </View>

            <View style={styles.PostView}> 
                <ScrollView>  
            {
                checklists.map((item, index) => {
                    if(item) {
                        return (
                            <RectButton style={styles.CheckButtonContainer} key={index}>
                                <View style={styles.checksHead}>
                                    <Text style={styles.titlePost}>{item?.title}</Text>    
                                    <View style={styles.checksText}>   
                                        {
                                            item.valor.map((item, index) => (
                                                <Text style={styles.textPost}>- {item.value}</Text>
                                            ))
                                        }
                                  
                                    <Text style={styles.textPost}>{item?.data}</Text>
                                    <RectButton onPress={() => removeCheck(item)} 
                                        style={styles.buttonBar}>   
                                        <Image source={deleteIcon}/> 
                                    </RectButton>
                                    </View>
                                    </View>
                            </RectButton>

                        );
                    }
                    else {
                        return (
                            <View></View>
                        );
                    }
                })
            }
                </ScrollView> 
                <ScrollView>
            {
                postItList.map((item, index) => {
                    if(true) {
                        return (
                            <RectButton style={styles.PostButtonContainer}>
                                <View style={styles.postsHead}>
                                    <Text style={styles.titlePost}>{item.title}</Text>
                                <View style={styles.postsText}>    
                                    <Text style={styles.textPost}>{item.content}</Text>
                                    <RectButton onPress={() => removePost(item)} 
                                        style={styles.buttonBar}>   
                                        <Image source={deleteIcon}/> 
                                    </RectButton>
                                </View>
                                </View>
                            </RectButton>
                        );
                    }
                    else {
                        return (
                            <View></View>
                        );
                    }
                })
            }
            </ScrollView>
            </View> 
            
            <View style ={styles.buttonsContainer}>   
                <RectButton onPress={navigateToSendingCheck} style={[styles.button, styles.buttonPrimary]}> 
                    <Image source={check} /> 
                    <Text style ={styles.buttontext1}>CHECKLIST </Text>
                </RectButton>
                
                <RectButton onPress={navigateToSendingPost} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={post} />
                    <Text style ={styles.buttontext2}>POST-IT </Text>
                </RectButton>
            </View>
        </View>  
    );
    
}
export default Landing;