import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet,} from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import LottieView from 'lottie-react-native';
// import firebase from '../../firebase';

export default function ViewCart({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);


    const total = items
    .map((item) => Number(item.price))
    .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: "currency",
        currency: "USD",
    });

    const addOrderToFireBase = () => {
        setLoading(true);
        const db = firebase.firestore();
        db.collection("orders").add({
            items: items,
            restaurantName: restaurantName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            setTimeout(() => {
                navigation.navigate("OrderCompleted");
                setLoading(false);
                // setModalVisible(false);
            }, 2500);
        });
        setModalVisible(false);
           navigation.navigate('OrderCompletd')
    };

    const styles = StyleSheet.create( {
        modalContaier: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.7)',
        },

        modalCheckoutContainer: {
            backgroundColor: 'white',
            padding: 16,
            height: 500,
            borderWidth: 1,
        },

        restaurantName: {
            textAlign: 'center',
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 15,
        },

        subtotalText: {
            textAlign: 'left',
            fontWeight: '600',
            fontSize: 15,
            marginBottom: 10,
        },
    })


    const checkoutModalContent = () => {
        return (
           <>
           <View style={styles.modalContaier}>
                <View style={styles.modalCheckoutContainer}>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                    {items.map((item, index) => (
                        <OrderItem key={index} item={item} />
                    ))}
                    <View style={styles.subtotalContainer}>
                        <Text style={styles.subtotalText}>Subtotal</Text>
                        <Text>{totalUSD}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity 
                            style={{
                            marginTop: 20,
                            backgroundColor: 'black',
                            alignItems: 'center',
                            borderRadius: 30,   
                            width: 300,
                            position: 'relative'
                            }}
                            onPress={() => {
                                navigation.navigate('OrderCompletd');
                                setModalVisible(false);
                            }}
                            >
                            <Text 
                            style={{
                            fontSize: 20,
                            color: 'white',
                            padding: 10
                            }}
                          >Checkout</Text>

                            <Text 
                            style={{
                            position: 'absolute',
                            right: 15,
                            color: 'white',
                            fontSize: 15,
                            top: 17
                            }}>
                            {total ? totalUSD : ""}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
           </View>
           </>
        );
    };


    return (
        <>
        <Modal 
            animationType='slide'
            visible={modalVisible}
            transparent={true}
            onRequestClose={() =>
            setModalVisible(false)} 
            >

                {checkoutModalContent()}
            </Modal>
            {total ? (
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
                <View 
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                <TouchableOpacity style={{
                    marginTop: 20,
                    backgroundColor: 'black',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    padding: 20,
                    borderRadius: 30,
                    width: 280,
                    position:'relative',
                }}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{color: 'white', fontSize: 20, marginRight: 20}}>
                        View Cart
                    </Text>
                    <Text style={{color: 'white', fontSize: 20,}}>${totalUSD}</Text>
                </TouchableOpacity>
            </View>
        </View>
     ) : (
     <></>
     )}
     { loading ? ( <View 
     style={{
         backgroundColor: 'black',
         position: 'absolute',
         opacity: 0.6,
         justifyContent: 'center',
         alignItems: 'center',
         flex: 1,
         width: '100%',
         height: '100%'
         
     }}
     >
    <LottieView 
        style={{height: 200}}
        source={require('../../assets/animations/scanner.json')}
        autoPlay
        speed={3}
        />
     </View>
     ) : ( 
     <></>
    )}
    </>
    );
}
