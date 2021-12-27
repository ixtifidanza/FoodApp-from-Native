import React from 'react'
import { View, Text, Image } from 'react-native'

const image = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80'

const title = 'FarmHouse Kitch Thai Cuisine';
const description = 'Thai Comfort Food $$ 4 stars (2913+)';

export default function About() {
    return (
        <View> 
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
        </View>
    );
}

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} 
    style={{ width: "100%", height: 180 }}
    />
)

const RestaurantTitle = (props) => (
    <Text 
        style={{
            fontSize: 27,
            fontWeight: "bold",
            marginTop: 10,
            marginHorizontal: 15,
        }}
        >{props.title}</Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        fontWeight: "400",
        marginHorizontal: 15,
        fontSize: 15.5,
    }}>
    {props.description}</Text>
)


