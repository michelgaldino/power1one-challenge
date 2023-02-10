import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { 
    View, 
    StyleSheet, 
    Text
} from 'react-native';
import Header from '../components/Header';

//Utils
import { COLORS } from '../resources/colors';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    }
});

export default Home;