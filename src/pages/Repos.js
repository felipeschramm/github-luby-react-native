import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native'
import Colors from '../assets/styles';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Creators as UserActions } from '../store/ducks/user'



const Repos = ({ navigation }) => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.user)

    useEffect(() => {
        dispatch(UserActions.getReposRequest(userData?.userData?.login))
    }, [userData?.userData])


    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: Colors.background }}>
            {
                userData.reposLoading ? <ActivityIndicator color={'white'} size={'large'} /> : (
                    <>

                        <View style={styles.header}>

                            <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backArrow}>
                                <Icon name="arrow-left" size={22} color='white' />
                            </TouchableOpacity>

                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <Text style={styles.hashtag}>
                                    {userData?.userData?.public_repos + ' repositórios'}
                                </Text>
                            </View>
                        </View>

                        <FlatList
                            data={userData.reposData}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.container}>
                                        <View style={styles.rowTitle}>
                                            <View style={styles.yellowBox} />
                                            <Text style={styles.titleRepo}>
                                                {item.name}
                                            </Text>
                                        </View>

                                        <View style={{ marginLeft: 28 }}>
                                            <Text style={styles.about}>
                                                {item.description}
                                            </Text>

                                            <View style={styles.rowIcons}>
                                                <Icon name="star" color={Colors.yellow} size={17} />
                                                <Text style={styles.number}>
                                                    {item.stargazers_count}
                                                </Text>

                                                <View style={styles.locksView}>
                                                    <Icon name="unlock" color={Colors.unlock} size={18} />
                                                    <Icon name="lock" color={Colors.lock} size={18} style={{ marginLeft: 10 }} />
                                                </View>
                                            </View>

                                        </View>
                                    </View>
                                )
                            }}
                        />
                        <View style={{ height: 75, backgroundColor: Colors.background }} />
                    </>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.darkBackground,
        width: '100%',
        height: 68,
        justifyContent: "center"
    },
    backArrow: {
        alignItems: 'center',
        position: 'absolute',
        top: 23,
        left: 15
    },
    hashtag: {
        color: 'white',
        marginLeft: 11,
        fontSize: 17,
        fontWeight: 'bold'
    },
    container: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightBackground,
        backgroundColor: Colors.background,
        paddingBottom: 30
    },
    rowTitle: {
        flexDirection: 'row',
        width: '90%',
        height: 45,
        marginTop: 20,
        alignItems: 'center'
    },
    yellowBox: {
        width: 20,
        height: 42,
        backgroundColor: Colors.yellow,
        borderRadius: 100,
        marginLeft: -10
    },
    titleRepo: {
        fontSize: 20,
        color: 'white',
        marginLeft: 18,
        fontWeight: 'bold'
    },
    about: {
        color: 'white',
        fontSize: 15,
        marginRight: 58
    },
    rowIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    number: {
        color: 'white',
        fontSize: 15,
        marginLeft: 5
    },
    locksView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 250
    }
})

export default Repos;