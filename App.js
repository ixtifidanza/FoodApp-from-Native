import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import RootNavigation from './navigation';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';

export default function App() {
  return  <RootNavigation />
}