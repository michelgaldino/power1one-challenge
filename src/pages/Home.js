import React, { useEffect, useRef, useState } from 'react'
import { 
    View, 
    StyleSheet, 
    FlatList,
    Alert,
    Dimensions
} from 'react-native';

//Custom Components
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import ModalProductDetails from '../components/ModalProductDetails';
import ModalizeHeader from '../components/ModalizeHeader';

//Utils
import { COLORS } from '../resources/colors';
import axios from 'axios';
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

const { height, width } = Dimensions.get('window')

const Home = () => {

    const modalize = useRef(null);

    const [ loadingList, setLoadingList ] = useState(true);

    const [ products, setProducts ] = useState('');
    const [ currentProduct, setCurrentProduct ] = useState('');

    const [ page, setPage ] = useState(1)

    useEffect(() => {
        (async () => {
            await getProducts()
        })();
    }, []);

    //Get produtos
    const getProducts = async () => {

        setLoadingList(true)

        const url = 'https://752136.commercesuite.com.br/web_api/products';

        await axios.get(url, { params: { limit: 10, page: page }})
            .then((response) => {
                const productsList = response.data['Products'];

                //Timeout apenas para você visualizar a tela de carregamento
                setTimeout(() => {
                    setProducts([...products, ...productsList])
                    setPage(page+1)
                    setLoadingList(false)
                }, 1000)
            })
            .catch((error) => {
                Alert.alert("Ocorreu um erro ao buscar os produtos")
            })
    }

    if(!products){
        return(
            <Loading text='Buscando produtos' />
        )
    }

    return (
        <GestureHandlerRootView style={styles.container}>
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
                keyExtractor={(item) => String(item['Product'].id)}
                renderItem={({ item }) => (
                    <ProductCard 
                        product={item['Product']}
                        onSelect={(product) => {
                            setCurrentProduct(product)
                            modalize.current?.open();
                        }}
                    />
                )}
                ListFooterComponent={loadingList && (
                    <View style={{ height: 60, justifyContent: 'center', alignItems: 'center'}}>
                        <Loading />
                    </View>
                )}
                onEndReached={getProducts}
                onEndReachedThreshold={0.1}
            />

            <Modalize 
                adjustToContentHeight={true} 
                disableScrollIfPossible={false} 
                modalStyle={{
                    backgroundColor: COLORS.background, 
                    marginTop: Constants.statusBarHeight,
                }} 
                ref={modalize} 
                snapPoint={height*0.65}
                // modalHeight={height*0.9}
                HeaderComponent={
                    <ModalizeHeader
                        title='Detalhes do produto' 
                        onClose={() => modalize.current?.close()}
                    />
                }
            >
                <ModalProductDetails 
                    product={currentProduct}
                />
            </Modalize>
        </GestureHandlerRootView>
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