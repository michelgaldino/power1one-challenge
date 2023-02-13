import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { 
    View, 
    StyleSheet, 
    Text,
    FlatList,
    Alert
} from 'react-native';
import Header from '../components/Header';

//Utils
import { COLORS } from '../resources/colors';
import axios from 'axios';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';

const Home = () => {

    const [ products, setProducts ] = useState('');

    useEffect(() => {
        (async () => {
            await getProducts()
        })();
    }, [])

    //Get produtos
    const getProducts = async () => {

        const url = 'https://752136.commercesuite.com.br/web_api/products';

        await axios.get(url, { params: { limit: 5, page: 1 }})
            .then((response) => {
                const productsList = response.data['Products'];

                //Timeout apenas para você visualizar a tela de carregamento
                setTimeout(() => {
                    setProducts(productsList)
                }, 1000)
            })
            .catch((error) => {
                console.log("Error: ", error)
            })
    }

    if(!products){
        return(
            <Loading text='Buscando produtos' />
        )
    }

    return (
        <View style={styles.container}>
            <Header />

            <FlatList 
                style={styles.flatlist}
                contentContainerStyle={{
                    marginHorizontal: 20,
                }}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                numColumns={2}
                horizontal={false}
                data={products}
                keyExtractor={(item) => item['Product'].id}
                renderItem={({ item }) => (
                    <ProductCard 
                        product={item['Product']}
                        onPress={() => Alert.alert('Pressionado')}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    flatlist: {
        flex: 1,
    }
});

export default Home;