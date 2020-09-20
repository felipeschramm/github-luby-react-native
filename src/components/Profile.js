import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../assets/styles'

const Profile = ({ name, email, city }) => (
    <>
        <View style={styles.rowName}>
            <View style={styles.yellowBox} />
            <Text style={styles.nameUser}>
                {name && name}
                {!name && "Nome não informado"}
            </Text>
        </View>

        <View style={{ marginLeft: 24 }}>
            <Text style={{ color: 'white', fontSize: 18 }}>
                {email && email}
                {!email && "Email não informado"}
            </Text>

            <Text style={{ color: 'white', fontSize: 18 }}>
                {city && city}
                {!city && "Localização não informada"}
            </Text>
        </View>
    </>
)

const styles = StyleSheet.create({
    rowName: {
        flexDirection: 'row',
        width: '95%',
        height: 45,
        marginTop: 97,
        paddingBottom:15,
        alignItems: 'center'
    },
    yellowBox: {
        width: 20,
        height: 42,
        backgroundColor: Colors.yellow,
        borderRadius: 100,
        marginLeft: -10
    },
    nameUser: {
        fontSize: 26,
        color: 'white',
        marginLeft: 14,
        fontWeight: 'bold'
    }
})

export default Profile;