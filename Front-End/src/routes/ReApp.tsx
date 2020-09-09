import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Animation from '../pages/Animation';
import LandingPage from '../pages/LandingPage';
import SendingCheck from '../pages/SendingCheck';
import SendingPost from '../pages/SendingPost';


const { Navigator, Screen } = createStackNavigator();

function ReApp() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Animation" component={Animation} />
                <Screen name="LandingPage" component={LandingPage} />
                <Screen name="SendingCheck" component={SendingCheck} />
                <Screen name="SendingPost" component={SendingPost} />
            </Navigator>
        </NavigationContainer>
    );
}

export default ReApp;