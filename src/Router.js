import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Icons
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

//Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Account from './pages/Account';

//Utils
import { COLORS } from './resources/colors';

//Tab Navigation
const Tab = createBottomTabNavigator();

export default function Router(){
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: COLORS.header,
                    borderColor: 'transparent',
                },
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.grey,
                tabBarItemStyle: {
                    paddingTop: 5,
                    paddingBottom: 5,
                }
            }}
        >
            <Tab.Screen 
                name="Início" 
                component={Home} 
                options={{ headerShown: false, tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="home" size={size} color={color}/>
                    ) 
                }}
            />

            <Tab.Screen 
                name="Carrinho" 
                component={Cart} 
                options={{ headerShown: false, tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name="shopping-cart" size={size} color={color}/>
                    ) 
                }}
            />

            <Tab.Screen 
                name="Conta" 
                component={Account} 
                options={{ headerShown: false, tabBarIcon: ({ size, color }) => (
                        <FontAwesome name="user" size={size} color={color}/>
                    ) 
                }}
            />
        </Tab.Navigator>
    );
}