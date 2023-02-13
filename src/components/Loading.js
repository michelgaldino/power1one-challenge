import React from 'react'
import { 
    View, 
    StyleSheet, 
    Text,
    ActivityIndicator
} from 'react-native';

//Utils
import { COLORS } from '../resources/colors';

const Loading = ({ text }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={COLORS.header} />
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        marginTop: 20,
        color: COLORS.header
    }
});

export default Loading;