import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles'

import lupa from '../../assets/images/icons/lupa.png';
import mais from '../../assets/images/icons/mais.png';

function Landing() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Re-Minder</Text>

            
        
            <View style ={styles.buttonsContainer}>
                
                <TouchableOpacity style={styles.buttonSecondary}> 
                    <Image source={lupa} /> 

                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTerciary}>
                    <Image source={mais} />

                </TouchableOpacity>
                

            </View>
        </View>  
      

    );
    
}
export default Landing;