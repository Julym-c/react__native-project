import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import Colors from '../../../resources/Colors';

const coinDetail = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.priceText}>{item.price_usd}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: 'transparent',
        borderWidth: 1,
        margin: 10,
        marginTop: 20,
        marginBottom: 20,
        padding: 16,
    },
    nameText: {
        color: Colors.yellow,
        fontWeight: 'bold',
        paddingBottom: 12,
    },
    priceText: {
        color: Colors.white,

    }
})

export default coinDetail;