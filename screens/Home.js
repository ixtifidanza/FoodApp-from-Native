import React from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestourantItems, { 
    localRestaurants,
} from "../components/RestourantItems";

import SearchBar from '../components/SearchBar'

// const VELP_API_KEY


export default function Home() {

    const  [restaurantData, setRestaurantData] = React.useState(localRestaurants)

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1}}>
            <View style={{backgroundColor: 'white', padding: 15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories/>
                <RestourantItems restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    );
}
