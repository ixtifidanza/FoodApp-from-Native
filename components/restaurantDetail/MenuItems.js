import React from 'react'
import { View, Text, Image, StyleSheet,ScrollView,} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch } from 'react-redux';

const foods = [
    {
        title: "Marvarid",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 15.5,
        image: "https://avatars.mds.yandex.net/get-altay/1583613/2a0000016f0dadc5fcca1df5e7cab4d6af2f/XXL"
    },
    {
        title: "Marvarid",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 15.5,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
    {
        title: "Marvarid",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 15.5,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
    {
        title: "Marvarid",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 15.5,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
    {
        title: "Marvarid",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 15.5,
        image: "https://www.afisha.uz/ui/catalog/2014/12/0256196_b.jpeg"
    },
    {
        title: "Marvarid",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 15.5,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
    {
        title: "Marvarid",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 15.5,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
    {
        title: "Marvarid",
        description: 'of type and scrambled it to make a type specimen book.',
        price: 15.5,
        image: "https://avatars.mds.yandex.net/get-altay/4336412/2a00000177fdf45603aff750916c144ac921/XXL"
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
})


export default function MenuItems({ restaurantName}) {
    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) => 
    dispatch({
        type: 'ADD_TO_CART', 
        payload: {
            ...item, 
            restaurantName: restaurantName,
            checkboxValue: checkboxValue,
        },
    });
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) =>(
            <View key={index}>
                <View style={styles.menuItemStyle}>
                    <BouncyCheckbox iconStyle={{ borderColor: "lightgray", borderRadius: 0,}}
                    fillColor="green"
                    onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                    />
                    <FoodInfo food={food} />
                    <FoodImage food={food} /> 
                </View>
                <Divider width={0.5} orientation='vertical' style={{marginHorizontal: 20}}/>
            </View>
        ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{width: 220, justifyContent: "space-evenly",}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }} 
        style={{width: 100, height: 100, borderRadius: 8}}
        />
    </View>
);

