import React from 'react'
import { View, Text, Image } from 'react-native'



const description = 'Thai Comfort Food $$ 4 stars (2913+)';

export default function About({ route }) {
    const {name,image} = route.params;
  
    return (
        <View> 
            <RestaurantImage image={image} />
            <RestaurantTitle title={name} />
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


