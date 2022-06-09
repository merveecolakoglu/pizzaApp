import React from 'react'
import { SafeAreaView, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/screens/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CartScreen from "./app/screens/CartScreen";
import FavoriteScreen from "./app/screens/FavoriteScreen";
import AccountScreen from "./app/screens/AccountScreen";

const Tab=createMaterialBottomTabNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#eab19c"
        inactiveColor="lightgray"
        barStyle={{backgroundColor:'transparent',elevetion:0,borderTopWidth:0}}
        >
        <Tab.Screen name='Home'
                    component={HomeScreen}
                    options={{
                      tabBarLabel:'Ana Sayfa',
                      tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name="home" color={color} size={26}/>
                      )
                    }}
                    />
        <Tab.Screen name='Cart'
                    component={CartScreen}
                    options={{
                      tabBarLabel:'Sepetim',
                      tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name='cart' color={color} size={26}/>
                      )
                    }}
        />
        <Tab.Screen name='Favori'
                    component={FavoriteScreen}
                    options={{
                      tabBarLabel:'Favorilerim',
                      tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name='heart' color={color} size={26}/>
                      )
                    }}
        />
        <Tab.Screen name='Account'
                    component={AccountScreen}
                    options={{
                      tabBarLabel:'Hesabım',
                      tabBarIcon:({color})=>(
                        <MaterialCommunityIcons name='account' color={color} size={26}/>
                      )
                    }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
