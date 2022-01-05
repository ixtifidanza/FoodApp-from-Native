import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';

export default function ViewCart() {
    const items = useSelector((state) => state.cartReducer.selectedItems.items);


    const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: "currency",
        currency: "USD",
    });

    console.log(totalUSD);

    return (
    <View 
    style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        top: 635,
        zIndex: 0,
    }}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
        }}>
            <TouchableOpacity style={{
                marginTop: 20,
                backgroundColor: 'black',
                alignItems: 'center',
                padding: 8,
                borderRadius: 30,
                width: 280,
                position:'relative',
            }}>
                <Text style={{color: 'white', fontSize: 20}}>View Cart</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}
