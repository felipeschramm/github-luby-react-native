import React from 'react'
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native'
import Colors from '../assets/styles'

const MenuInfo = ({numFlrs, numFlw, numRepos}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Text style={styles.number}>
                {numFlrs}
                </Text>

                <Text style={{ fontSize: 17, color: 'white' }}>
                    Seguidores
                </Text>
            </View>

            <View style={styles.containerItem}>
                <Text style={styles.number}>
                    {numFlw}
                </Text>

                <Text style={{ fontSize: 17, color: 'white' }}>
                    Seguindo
                </Text>
            </View>

            <View style={styles.containerItem}>
                <Text style={styles.number}>
                    {numRepos}
                </Text>

                <Text style={{ fontSize: 17, color: 'white' }}>
                    Repos
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: 97, 
        marginTop: 44, 
        backgroundColor: Colors.lightBackground, 
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    number:{
        fontSize: 40, 
        fontWeight: 'bold', 
        color: 'white'
    },
    containerItem:{
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingBottom: 10 
    }
})

export default MenuInfo;