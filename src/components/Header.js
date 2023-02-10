import React from 'react'
import { 
    View, 
    StyleSheet, 
    Text,
    Dimensions,
    Image
} from 'react-native';

//Icons
import { Entypo, FontAwesome} from '@expo/vector-icons';

//Utils
import { COLORS } from '../resources/colors';
import Constants from 'expo-constants';

const { height, width } = Dimensions.get('window')

const Header = () => {
    return (
        <View style={styles.container}>
            <Entypo name="menu" size={24} color={COLORS.white} />
            <Image 
                style={{ width: 80, height: 50}}
                resizeMode='stretch'
                source={require('../../assets/logo.png')}
            />
            <FontAwesome name="search" size={24} color={COLORS.white} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: COLORS.header,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
});

export default Header;