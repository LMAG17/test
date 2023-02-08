import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useContext, useState } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { drawerOptions } from '../Constants/DrawerOptions'
import { Context, ContextContentAnimated } from '../Context'
import { RootStackParamList } from '../Models/RootStackParamList'

export default function DrawerOptions() {

    const { contentPositionAnimation, toggleDrawer }: ContextContentAnimated = useContext(Context);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const [optionSelected, setOptionSelected] = useState(0)

    const navigate = (route: string, index: number,) => {
        setOptionSelected(index)
        toggleDrawer()
        navigation.navigate(route)
    }

    const transformAnimated = [
        {
            translateY: contentPositionAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 20]
            }),
        }
    ]

    return (
        <Animated.View
            style={[styles.containerStyle, {
                transform: transformAnimated
            }]}>
            <Text style={styles.drawerTitle}>
                BEKA
            </Text>
            <View>
                {
                    drawerOptions.map((option, index) => {
                        return <TouchableOpacity key={`${index} ${option}`} style={[optionSelected == index ? styles.optionContainerSelected : styles.optionContainer,]} onPress={() => navigate(option.navRef, index)}>
                            <Text style={[optionSelected == index ? styles.optionTextSelected : styles.optionText,]}>{option.title}</Text>
                        </TouchableOpacity>
                    })
                }
            </View>
            <View style={styles.divider} />
            <View style={[styles.optionContainer]}>
                <Text style={[styles.optionText]}>Sign Out</Text>
            </View>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    optionText: {
        fontSize: 16,
        fontWeight: '700',
    },
    optionTextSelected: {
        fontSize: 16,
        fontWeight: '500',
        color: '#E56C64'
    },
    optionContainerSelected: {
        margin: 8,
        backgroundColor: '#3F2836',
        padding: 8,
        borderRadius: 8
    },
    optionContainer: {
        margin: 8,
        padding: 8
    },
    containerStyle: {
        borderTopStartRadius: 40,
        flex: 1,
        backgroundColor: '#1B172A',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 24,
    },
    divider: {
        backgroundColor: '#FCFCFF',
        height: 1,
        width: '40%',
        margin: 8
    },
    drawerTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8
    },
})