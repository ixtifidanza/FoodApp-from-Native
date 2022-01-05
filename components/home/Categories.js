import React from 'react'
import { View, Text, Image, ScrollView} from 'react-native' 
const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },

    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery Items",
    },

    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast Foods",
    },

    {
        image: require("../../assets/images/deals.png"),
        text: 'Deals',
    },

    {
        image: require("../../assets/images/coffee.png"),
        text: 'Coffee',
    },
    {
        image: require("../../assets/images/desserts.png"),
        text: 'Desserts',
    },
];

// const getRestaurantsApi = () => {
//     const [isLoading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
//     console.log(data);
  
//     useEffect(() => {
//       fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//         .then((response) => response.json())
//         .then((json) => setData(json))
//         .catch((error) => console.error(error))
//         .finally(() => setLoading(false));
//     }, []);
// }

export default function Categories() {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingLeft: 20,
        }}>
        <ScrollView horizontal showsScrollIndicator={false}>
            {items.map((item, index) =>(
                <View key={index} style={{alignItems: 'center', marginRight: 30}}>
                    <Image source={item.image} 
                        style={{
                        width: 50,
                        height: 50,
                        resizeMode: "contain",
                    }}
                    />
                    <Text 
                    style={{
                        fontSize: 13,
                        fontWeight: "700",
                    }}>
                    {item.text}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
    );
}
