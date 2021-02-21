import React, {Component} from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
/*Pressable es como un hiperlink de web como botón press o tab*/ 
/*Flatlist es una lista plana que no tiene secciones*/
/*toolbar o header de la app*/

import Http from '../../librerias/http';
import CoinsItems from './CoinsItem';
import Colors from '../../resources/Colors';

class Coins extends Component {

    /*Estados para saber como esta la Api */
    state = {
        coin: [],
        loading: false
    }

    componentDidMount = async () => {
        this.setState ({ loading: true })
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        this.setState ({ coin: res.data, loading:false });
    }

    handlepress = (coinValue) => {
        console.log("Go to detail", this.props);
        /*props es para llamar los estados del componente en este caso navigate*/
        this.props.navigation.navigate('Detail', {coinValue})
    }

    render (){

        const {coin, loading} = this.state;

        return (
            <View style={styles.container}>
            { loading ?  /*para saber si el estado esta cargando, si es true */
                <ActivityIndicator 
                    style={styles.loader}
                    color="white" 
                    size= "large"
                />
                : null /*Si es false devuelve null */
            }
                <FlatList
                    data= {coin}
                    renderItem={({ item }) => 
                        /* se crea un componente fuera y se pone con el parametro de item*/
                        <CoinsItems 
                            onPress={() => this.handlepress(item)}
                            item= { item } 
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loader: {
        marginTop: 200,
    },  
    container: {
        backgroundColor: Colors.charade,
        flex: 1,
    },
    button: {
        backgroundColor: "hotpink",
        borderRadius: 20,
        color: "white",
        fontSize: 16,
        margin: 16,
        padding: 8,
        textAlign: 'center',
        width: 200,
    },
})

export default Coins;