import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import ContactView from '../Views/ContactView';
import HomeView from '../Views/HomeView';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeView} />
            <Tab.Screen name="Contact" component={ContactView} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})