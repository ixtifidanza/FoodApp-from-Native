import React from 'react'
import { View, Text, Image} from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
    {
        title: "Marvarid",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 16.5,
        image: "https://avatars.mds.yandex.net/get-altay/1583613/2a0000016f0dadc5fcca1df5e7cab4d6af2f/XXL"
    },
    {
        title: "Anjir",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 21.2,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
    {
        title: "Samara",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 19.8,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
    {
        title: "Yalpiz",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 17.5,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
    {
        title: "Rayhon",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 14.3,
        image: "https://www.afisha.uz/ui/catalog/2014/12/0256196_b.jpeg"
    },
    {
        title: "Milliy-taom",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 12.2,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
    {
        title: "Safo milliy taom",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 15.5,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
    {
        title: "Marvarid",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 20.5,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
];


export default function RestaurantDetail({ route, navigation }) {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginHorizontal: 20}}/>
            <MenuItems restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} />
        </View>
    );
}
