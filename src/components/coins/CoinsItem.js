import React from 'react';
import { View, Text, StyleSheet, Image, Platform, Pressable } from 'react-native'
import { color } from 'react-native-reanimated';

import Colors from '../../resources/Colors';

const CoinsItems = ({item, onPress}) => {
    
    let getTextValue = () => {
        if ( item.percent_change_1h > 0 ) {
            return styles.green
        }
        else {
            return styles.red
        }
    }

    let getImageArrow = () => {
        if ( item.percent_change_1h > 0 ){
            return require("../../assets/arrow_up.png");
        }
        else {
            return require("../../assets/arrow_down.png");
        }
    }


    return (
        <Pressable 
            style={styles.container}
            onPress= {onPress}
        >
            <View>
                <Text style={ styles.symbolText }> {item.symbol} </Text>
                <Text style={ styles.nameText }> {item.name} </Text>
            </View>

            <View style={styles.containerValues}> 
                <View style={styles.containerArrow}>
                    <Image
                        style={styles.imageIcon}
                        source={getImageArrow()}
                    />
                    <Text style={getTextValue()}> {item.percent_change_1h} </Text>
                </View>
                <Text style={ styles.value }> {`$ ${item.price_usd}`} </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.yellow,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        margingLeft: Platform.OS == 'ios' ? 16:0,
    },
    symbolText: {
        color: Colors.yellow,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    nameText: {
        color: Colors.white,
        fontSize: 14,
        
    },
    containerValues: {
        alignItems: 'flex-end'
    },
    containerArrow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageIcon: {
        height: 15,
        marginRight: 10,
        width: 15,
    },
    green: {
        color: Colors.green,
        fontSize: 12
    },
    red: {
        color: Colors.red,
        fontSize: 14
    },
    percent: {
        color: Colors.yellow,
        fontSize: 14,
    },
    value: {
        color: Colors.white,
        fontSize: 14,
        marginTop: 8,
    }
});

export default CoinsItems;