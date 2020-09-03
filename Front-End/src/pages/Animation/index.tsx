import React, { useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const FadeInView = () => {
    const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
  
    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true
      }).start();
    }, []);
  
    return (
      <Animated.View style={{opacity: fadeAnim }}>
        <Text style={styles.title}>Re-MINDER</Text>
        <Text style={styles.subTitle}>clique aqui ou no título {'\n'} para  acessar o mural!  </Text>
      </Animated.View>
    );
  };

function Animation () {
    const {navigate} = useNavigation();

    function navigateToLandingPage() {
        navigate('LandingPage');
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <RectButton
                onPress={navigateToLandingPage}
                 style={styles.button}
                 >
                    <FadeInView/>
                </RectButton>
            </View>
        </View>
    );   
}
export default Animation;