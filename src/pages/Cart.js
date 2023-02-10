import React from 'react'
import { 
    View, 
    StyleSheet, 
    Text
} from 'react-native';

//Utils
import { COLORS } from '../resources/colors';

const Cart = () => {
    return (
        <View style={styles.container}>
            <Text>Carrinho</Text>
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

export default Cart;