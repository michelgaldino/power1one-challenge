import React from 'react'
import { 
    View, 
    StyleSheet, 
    Text
} from 'react-native';

//Utils
import { COLORS } from '../resources/colors';

const Account = () => {
    return (
        <View style={styles.container}>
            <Text>Conta</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Account;