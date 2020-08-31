import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import Animation from './src/pages/Animation';
import SendingPost from './src/pages/SendingPost';

import { useFonts, Kalam_400Regular, Kalam_700Bold, Kalam_300Light } from "@expo-google-fonts/kalam";
import { Poppins_400Regular , Poppins_700Bold, Poppins_300Light} from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsloaded] = useFonts({ //fontes usadas
    Kalam_400Regular,
    Poppins_400Regular,
    Kalam_700Bold, 
    Kalam_300Light,
    Poppins_700Bold, 
    Poppins_300Light,
  });

  if (!fontsloaded){
    return <AppLoading />;
  } else{

  return(
    <>
      <SendingPost />
      <StatusBar style="light" />
    </>

    );
  }
}

