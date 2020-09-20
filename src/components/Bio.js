import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../assets/styles'

const Bio = ({bioText}) => (
    <View>
        <View style={styles.rowBio}>
            <View style={styles.yellowBox} />
            <Text style={styles.bioTitle}>
                BIO
            </Text>
        </View>

        <View style={styles.bioTextView}>
            <Text style={{ color: 'white', fontSize: 18 }}>
                {bioText && bioText}
                {!bioText && "Biografia não informada"}
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    rowBio:{
        flexDirection: 'row', 
        width:'100%',
        height:45,
        marginTop: 47, 
        alignItems: 'center' 
    },
    yellowBox:{
        width: 20, 
        height: 42, 
        backgroundColor: Colors.yellow, 
        borderRadius: 100, 
        marginLeft: -10 
    },
    bioTitle:{
        fontSize: 26, 
        color: 'white', 
        marginLeft: 14, 
        fontWeight: 'bold'
    },
    bioTextView:{
        marginLeft: 24, 
        marginRight:18, 
        paddingBottom:10
    }
})

export default Bio;