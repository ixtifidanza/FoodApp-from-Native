import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/restaurantDetail/MenuItems';
// import firebase from '../firebase'

export default function OrderCompletd() {

    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Marvarid",
                description: 'of type and scrambled it to make a type specimen book.',
                price: 16.5,
                image: "https://avatars.mds.yandex.net/get-altay/1583613/2a0000016f0dadc5fcca1df5e7cab4d6af2f/XXL"
            },
        ],
    });

    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);

    const total = items
    .map((item) => Number(item.price))
    .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: "currency",
        currency: "USD",
    });

    // useEffect(() => {
    //     const db = firebase.firestore();
    // const unsubscribe = db.collection('orders')
    //     .orderBy('createAt', 'desc')
    //     .limit(1)
    //     .onSnapshot((snapshot) => {
    //         snapshot.docs.map((doc) => {
    //             setLastOrder(doc.data());
    //         });
    //     });

        // return () => unsubscribe();
    // }, []);
     



    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{
                margin: 15,
                alignItems: 'center',
                // height: '100%',ss


            }}>
            <LottieView 
            style={{height: 150, alignSelf: 'center', marginBottom: 30,}} 
            source={require("../assets/animations/check-animation2.json")} 
            autoPlay
            speed={0.8}
            loop={true}
            />
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Your order at {restaurantName} has been placed for {totalUSD}</Text>


        <ScrollView>  
            <MenuItems foods={lastOrder.items} hideCheckbox={true} marginLeft={8} />

            <LottieView 
            style={{height: 200, alignSelf: 'center',}} 
            source={require('../assets/animations/cooking.json')}
            autoPlay
            loop={true}
            speed={0.8}
            />

        </ScrollView>
        </View>


        </SafeAreaView>
    );
}
