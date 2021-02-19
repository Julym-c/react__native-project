import React, {Component} from 'react';
import { View, Text, Pressable,StyleSheet } from 'react-native'
/*Pressable es como un hiperlink de web como botón press o tab*/ 
/*toolbar o header de la app*/
class Coins extends Component {

    handlepress = () => {
        console.log("Go to detail", this.props);
        /*props es para llamar los estados del componente en este caso navigate*/
        this.props.navigation.navigate('Coins__Detail')
    }

    render (){
        return (
            <View style={styles.container}>
                <Text style={styles.tittle}> Hola! Tontony</Text>
                <Pressable 
                    onPress={this.handlepress}>
                        <Text style={styles.button}>Ir a detail</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "pink",
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