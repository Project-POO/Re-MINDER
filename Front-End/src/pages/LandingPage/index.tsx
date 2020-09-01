import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import lupa from '../../assets/images/icons/lupa.png';
//import coracao from '../../assets/images/icons/coracao.png';
import mais from '../../assets/images/icons/mais.png';

function Landing() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>re-Minder</Text>

            
        
            <View style ={styles.buttonsContainer}>
                
                <TouchableOpacity style={[styles.button, styles.buttonSecondary]}> 
                    <Image source={lupa} /> 

                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonTerciary]}>
                    <Image source={mais} />

                </TouchableOpacity>
                

            </View>
        </View>  
      

    );
    
}
export default Landing;