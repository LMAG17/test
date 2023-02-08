import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Context, ContextContent } from '../Context'
import { RootStackParamList } from '../Models/RootStackParamList'

export default function Screen1View() {
    
    const { setTitle }: ContextContent = useContext(Context);

    useFocusEffect(() => { if (setTitle) setTitle("Screen1View") })

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Screen1</Text>
            <Button
                title='To screen 2'
                onPress={() => navigation.navigate("Screen2View")}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
    }
})