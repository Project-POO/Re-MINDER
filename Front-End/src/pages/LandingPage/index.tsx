import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { RectButton, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import styles from './styles'

import check from '../../assets/images/icons/check.png';
import lupa from '../../assets/images/icons/lupa.png';
import post from '../../assets/images/icons/post.png';
import reMinder from '../../assets/images/logo/LogoSmall.png';
import api from '../../services/api';

function Landing() {
    const {navigate} = useNavigation();

    const [checklists, setChecklists] = useState([]);
    const [postItList, setPostItList] = useState([]);

    const stylesA = StyleSheet.create({
        checks: {
            padding: 20,
            backgroundColor: "#f6f3",
            margin: 5

        },
        posts: {
            padding: 20,
            backgroundColor: "#ff33",
            margin: 5
        },
        value: {
            color: "black"
        }
    });

    

    function navigateToSendingPost() {
        navigate('SendingPost');
    }

    function navigateToSendingCheck() {
        navigate('SendingCheck');
    }

    async function getChecklist(){
        const {data} = await api.get("checklist");


        const info = data.map(({ check, checklist_id, data, id, title, valor }, index) => {
            if(id > 5){
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

    return (
        <View style={styles.container}>
            <View style={styles.title}>
             <Image source={reMinder}/>
            </View>


            <ScrollView style={styles.PostView}>

            {
                checklists.map((item, index) => {
                    if(item) {
                        return (
                            <RectButton key={index}>
                                <View style={stylesA.checks}>
                                    <Text>{item?.title}</Text>
                                    
                                        {
                                            item.valor.map((item, index) => (
                                                <Text>- {item.value}</Text>
                                            ))
                                        }
                                        
                                    
                                    <Text>{item?.data}</Text>
                                    <Text>{item?.check === 1 ? "true" : false}</Text>
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
            {
                postItList.map((item, index) => {
                    if(true) {
                        return (
                            <RectButton>
                                <View style={stylesA.posts}>
                                    <Text>{item.title}</Text>
                                    <Text style={stylesA.value}>{item.content}</Text>
                                    {/* <Text>{item.data}</Text> */}
                                    {/* <Text>{item.check === 1 ? "true" : false}</Text> */}
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