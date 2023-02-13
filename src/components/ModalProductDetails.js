import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Alert,
 } from 'react-native';


//Utils
import { COLORS } from '../resources/colors';
import Loading from './Loading';

//Array que define em quais posições do array de texto estarão as quebras de linha
const descriptionSpaces = [1, 6, 7, 10]

export default function ModalProductDetails({ product }) {

    const [ productDetails, setProductDetails ] = useState('');

    useEffect(() => {
        (async () => {
            const url = `https://752136.commercesuite.com.br/web_api/products/${product.id}`;

            await axios.get(url)
                .then((response) => {
                    const product = response.data

                    const formatedDescription = formatDescription(product['Product'].description)
                    setProductDetails({
                        ...product['Product'], 
                        description: formatedDescription
                    })
                })
                .catch((error) => {
                    Alert.alert("Ocorreu um erro ao obter os detalhes do produto");
                })
        })();
    }, [product])

    //Formata a descrição, removendo as tags HTML e transformando em um array de textos
    const formatDescription = (description) => {
        const texto = description.split('</span><')

        const arrayDescription = [];

        for(const index in texto){
            const texto2 = texto[index].split('>')
            if(texto2[texto2.length-1] != '' && texto2[texto2.length-1] != ' '){
                arrayDescription.push(texto2[texto2.length-1])
            }
        }

        return arrayDescription;
    }

    //Formata o preço para BRL
    const formatPrice = (price) => {
        const priceBrazil = price.replace('.', ',');

        return `R$ ${priceBrazil}`
    }

    if(!productDetails){
        return (
            <View style={styles.container}>
                <Loading />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.productName}>{product.name}</Text>
            
            {product['ProductImage'][0]
                ? <Image 
                    style={{ aspectRatio: 1 }}
                    source={{ uri: product['ProductImage'][0].https}}
                />
                :null
            }
            

            <Text style={styles.productPrice}>
                {formatPrice(product.price)}
            </Text>
            
            <Text style={styles.sectionText}>Descrição</Text>
            
            {productDetails && productDetails.description && productDetails.description.map((item, index) => (
                <View key={index}>
                    <Text style={styles.productDescription}>{item}</Text>

                    {/* Quebras de linhas definidas na variável descriptionSpaces */}
                    {descriptionSpaces.find(x => x == index) && (<View style={{ height: 20 }}></View>)}
                </View>
                
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    productName: {
        fontSize: 22,
        marginVertical: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: COLORS.black,
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 26,
        fontWeight: '600',
        marginVertical: 10,
        color: COLORS.black
    },
    productDescription: {
        fontSize: 16,
        color: COLORS.black
    },
    sectionText: {
        fontSize: 18,
        color: 'grey',
        marginVertical: 20,
    }
})