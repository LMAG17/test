import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'
import React, { useState } from 'react'
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HamburguerIcon from '../assets/hamburguerIcon.png'
import { RootStackParamList } from '../Models/RootStackParamList'
import TabNavigator from './TabNavigator'

export default function Drawer() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const options = [
        { title: "Start", navRef: "Home" },
        { title: "Screen 1", navRef: "Screen1View" },
        { title: "Screen 2", navRef: "Screen2View" },
        { title: "Contact", navRef: "Contact" },
    ]

    const [optionSelected, setOptionSelected] = useState(0)

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const [contentPositionAnimation, setContentPositionAnimation] = useState(new Animated.Value(0))

    const toggleDrawer = () => {
        if (isDrawerOpen) {
            closeDrawer()
        } else {
            openDrawer()
        }
        setIsDrawerOpen(!isDrawerOpen)
    }

    const openDrawer = () => {
        Animated.timing(contentPositionAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const closeDrawer = () => {
        Animated.timing(contentPositionAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const navigate = (route: string, index: number,) => {
        setOptionSelected(index)
        toggleDrawer()
        navigation.navigate(route,)
    }

    return (
        <Animated.View style={{
            flex: 1
        }}>
            <Animated.View
                style={[styles.containerStyle, {
                    flex: 1,
                    backgroundColor: '#1B172A',
                    alignItems: 'flex-start',
                    justifyContent: 'space-around',
                    padding: 24,
                    transform: [
                        {
                            translateY: contentPositionAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 20]
                            }),
                        },
                    ]
                }]}>
                <Text style={styles.drawerTitle}>
                    BEKA
                </Text>
                <View>
                    {
                        options.map((option, index) => {
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
            <Animated.View
                style={[{
                    position: 'absolute',
                    alignItems: 'center',
                    width: "100%",
                    height: "150%",
                    backgroundColor: '#FCFCFF',
                    borderRadius: contentPositionAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 40]
                    }),
                    transform: [
                        {
                            translateX: contentPositionAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 280]
                            }),
                        },
                        {
                            translateY: contentPositionAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 30]
                            }),
                        },
                        {
                            rotateZ: contentPositionAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-15deg"]
                            })
                        }]
                }]}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.openButton}
                        onPress={toggleDrawer}
                    >
                        <Image
                            style={styles.openButtonImage}
                            source={HamburguerIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.contentTitle}>Start</Text>
                </View>
                <View style={{ backgroundColor: 'red', width: '100%', height: "60%" }}>
                    <TabNavigator />
                </View>
            </Animated.View>
        </Animated.View >
    )
}

const styles = StyleSheet.create({
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
        borderTopStartRadius: 40
    },
    contentTitle: {
        flex: 6,
        color: '#B5B5B7',
        fontSize: 24,
    },
    openButton: {
        flex: 1
    },
    openButtonImage: {
        height: 30,
        width: 30,
    },
    header: {
        padding: 24,
        height: 75,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
})