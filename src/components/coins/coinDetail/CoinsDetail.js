import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, SectionList, FlatList} from 'react-native';
/*SectionList nos ayuda a tener listas seccionadas estilo acordeon, pide un array de objetos que contiene un titulo y un data*/

import Colors from '../../../resources/Colors';
import http from '../../../librerias/http';
import CoinMarketItem from './CoinMarketItem';

class CoinsDetail extends Component {

    state = {
        coinValue: {}
    }

    getSymbolIcon = (name) => {
        if (name) {
            const symbol = name.toLowerCase().replace(" ", "-");
            return  `https://c1.coinlore.com/img/25x25/${symbol}.png`;
        }
    }

    getSections = (coinValue) => {
        const sections = [
            {
                title: "Market cap",
                data: [coinValue.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [coinValue.volume24]
            },
            {
                title: "Change 24h",
                data: [coinValue.percent_change_24h]
            }
        ];

        return sections;
    }

    getMarkets = async (coinId) => {
        const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
        const markets = await http.instance.get(url);
        this.setState({markets})
    }

    componentDidMount(){
        // console.log("coinValue", this.props.route.params);
        const {coinValue} = this.props.route.params;
        this.props.navigation.setOptions({title: coinValue.symbol});
        this.getMarkets(coinValue.id);
        this.setState({coinValue});
    }
    
    render () {

        const {coinValue, markets} = this.state;

        return(
            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <Image
                        style={styles.iconImage}
                        source={{uri: this.getSymbolIcon(coinValue.name)}}
                    />
                    <Text style={styles.coinTitle}>{coinValue.name}</Text>
                </View>

                <SectionList
                    style={styles.section}
                    sections={this.getSections(coinValue)}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) =>
                        <View style={styles.sectionItem}>
                            <Text style={styles.itemText}> {item} </Text>
                        </View>
                    }
                    renderSectionHeader={({ section }) => 
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionText}> {section.title} </Text>
                        </View>
                    } 
                />

                <View style={styles.containerTitle}>
                    <Text style={styles.titleMarkets}>Markets</Text>
                </View>

                <FlatList
                    style={styles.list}
                    horizontal= {true}
                    data={markets}
                    renderItem={({ item }) => <CoinMarketItem item={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: Colors.charade,
        flex: 1,
    },
    subHeader: {
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 16,
        paddingBottom: 20
    },
    iconImage: {
        height: 25,
        width: 25,
    },
    coinTitle: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    section: {
        maxHeight: 220,
    },
    sectionItem: {
        padding: 8,
    },
    itemText: {
        color: Colors.white,
        fontSize: 14 ,
    },
    sectionHeader: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: 8,
    },
    sectionText:{
        color: Colors.yellow,
        fontSize: 14,
        fontWeight: '500',
    },
    containerTitle: {
        backgroundColor: Colors.yellow,
        height: 40,
        textAlign: 'center',
        width: '100%',
    },
    titleMarkets: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold', 
        marginTop: 5
    },
    list: {
        maxHeight: 150,
        paddingLeft: 16,
    },
})

export default CoinsDetail;