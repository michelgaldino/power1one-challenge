import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Router';

//Utils
import { COLORS } from './src/resources/colors';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" backgroundColor={COLORS.header} />
            <Router />
        </NavigationContainer>
    );
}
