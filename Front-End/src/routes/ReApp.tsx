import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Animation from '../pages/Animation';
import LandingPage from '../pages/LandingPage';

const { Navigator, Screen } = createStackNavigator();

function ReApp() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Animation" component={Animation} />
                <Screen name="LandingPage" component={LandingPage} />
            </Navigator>
        </NavigationContainer>
    );
}

export default ReApp;