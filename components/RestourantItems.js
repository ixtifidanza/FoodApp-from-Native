import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommuntyIcons from 'react-native-vector-icons/Ionicons';
import Categories from './Categories';

 export const localRestaurants = [
    {
        name: 'Versal Restaurant',
        image_url:'https://avatars.mds.yandex.net/get-zen_doc/2993437/pub_5ec870800d590b68ff5706f5_5ec87094258aef53cdb638ce/scale_1200',
        categories: ["Cafe", "Restaurant"],
        price: '$$',
        reveiws: 1244,
        rating: 7.0,
    },
    {
        name: 'Yakkasaroy Restaurant',
        image_url:'https://www.afisha.uz/ui/catalog/2014/02/0108705.jpeg',
        categories: ["Cafe", "Restaurant"],
        price: '$$',
        reveiws: 1244,
        rating: 6.5,
    },
    {
        name: 'Afruz Restaurant',
        image_url:'https://i.ytimg.com/vi/G_PXlB5BphM/maxresdefault.jpg',
        categories: ["Cafe", "Restaurant"],
        price: '$$',
        reveiws: 1244,
        rating: 5.5,
    },
    {
        name: 'MyDay Restaurant',
        image_url:'http://myday.uz/images/gallery/59766.jpg',
        categories: ["Cafe", "Restaurant"],
        price: '$$',
        reveiws: 1244,
        rating: 7.2,
    },
]


export default function RestourantItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 20}}>
            {props.restaurantData.map((restaurant, index) => ( 
            <View 
            key={index}
            style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}
            >

                <RestaurantImage image={restaurant.image_url} />
                <RestaurantInfo 
                name={restaurant.name} 
                rating={restaurant.rating} />
            </View>
            ))}
        </TouchableOpacity>
    )
}

const RestaurantImage = (props) => (
    <>
    <Image source={{
        uri: props.image
    }}
    style={{
        width: "100%",
        height: 180,
    }}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20,}}>
        <MaterialCommuntyIcons style={{marginTop: 20,}} name='heart-outline' size={25} color= '#fff'/>
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    }}
    >
    <View>
        <Text style={{ fontSize: 15, fontWeight:'bold', }}>
            {props.name}
        </Text>
        <Text style={{ fontSize: 13, color:'gray'}}>
            30-45 min 
        </Text>
    </View>
    <View style={{
        backgroundColor: '#eee',
        height: 30, 
        width:30,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
    }}>
        <Text>{props.rating}</Text>
    </View>
</View>
)
