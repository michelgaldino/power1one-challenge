import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Image,
    TouchableOpacity
} from 'react-native';

//Utils
import { COLORS } from '../resources/colors';

const ProductCard = ({ product, onSelect }) => {


    //Formata o preço para BRL
    const formatPrice = (price) => {
        const priceBrazil = price.replace('.', ',');

        return `R$ ${priceBrazil}`
    }

    return (
        <TouchableOpacity onPress={() => onSelect(product)} style={styles.container}>
            <View>
                {product['ProductImage'][0]
                    ? <Image 
                        style={{ aspectRatio: 1 }}
                        source={{ uri: product['ProductImage'][0].https}}
                    />
                    :null
                }
                <Text 
                    style={styles.productName}
                    numberOfLines={3}
                    ellipsizeMode='tail'
                >
                    {product.name}
                </Text>

                <Text style={styles.productPrice}>
                    {formatPrice(product.price)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '48%',
        backgroundColor: COLORS.background,
        padding: 20,
        marginVertical: 10,
        borderRadius: 20,

        //Sombras
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    productName: {
        flex: 1,
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 10,
        color: COLORS.success
    }
})

export default ProductCard;