import React from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestourantItems, { 
    localRestaurants,
} from "../components/home/RestourantItems";

import SearchBar from '../components/home/SearchBar'

// const VELP_API_KEY



export default function Home({ navigation }) {

    const  [restaurantData,] = React.useState(localRestaurants)

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1}}>  
            <View style={{backgroundColor: 'white', padding: 15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories/>
                <RestourantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs/>
        </SafeAreaView>
    );
}
