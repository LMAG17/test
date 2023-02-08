import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Screen1View from './Screen1View'
import Screen2View from './Screen2View'


const Stack = createNativeStackNavigator()

export default function HomeView() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Screen1View' component={Screen1View} />
            <Stack.Screen name='Screen2View' component={Screen2View} />
        </Stack.Navigator>
    )
}
