import React, { useContext } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import DrawerOptions from '../Components/DrawerOptions'
import Header from '../Components/Header'
import { Context, ContextContentAnimated } from '../Context'
import TabNavigator from './TabNavigator'

export default function Drawer() {

    const { contentPositionAnimation, toggleDrawer }: ContextContentAnimated = useContext(Context);

    const transformAnimated = [
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
        }
    ]

    const borderRadiudAnimated = contentPositionAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 40]
    })

    return (
        <Animated.View style={{
            flex: 1
        }}>
            <DrawerOptions />
            <Animated.View
                style={[
                    styles.animatedContainer,
                    {
                        borderRadius: borderRadiudAnimated,
                        transform: transformAnimated
                    }
                ]}>
                <Header toggleDrawer={toggleDrawer} />
                <View style={styles.screenContainer}>
                    <TabNavigator />
                </View>
            </Animated.View>
        </Animated.View >
    )
}

const styles = StyleSheet.create({
    animatedContainer: {
        position: 'absolute',
        alignItems: 'center',
        width: "100%",
        height: "150%",
        backgroundColor: '#FCFCFF',
    },
    screenContainer: {
        width: '100%',
        height: "60%"
    }
})