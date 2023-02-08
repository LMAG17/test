import React, { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HamburguerIcon from '../assets/hamburguerIcon.png';
import { Context } from '../Context';

type HeaderProps = {
    toggleDrawer: () => void,
}

export default function Header({ toggleDrawer }: HeaderProps) {

    const { title } = useContext(Context);

    return (
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
            <Text style={styles.contentTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 24,
        height: 75,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    openButton: {
        flex: 1
    },
    openButtonImage: {
        height: 30,
        width: 30,
    },
    contentTitle: {
        flex: 6,
        color: '#B5B5B7',
        fontSize: 24,
    }
})