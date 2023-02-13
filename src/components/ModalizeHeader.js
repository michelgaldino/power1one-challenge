import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
 } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

import { COLORS } from '../resources/colors';

const ModalizeHeader = ({ title, onClose }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
                <AntDesign name="close" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: COLORS.header,
    },
    surface: {
        backgroundColor: COLORS.black,
        height: 50,
        width: 50,
        borderRadius: 360,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#fff'
    }
})

export default ModalizeHeader;