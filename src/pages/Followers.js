import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, ScrollView, Image, FlatList, ActivityIndicator } from 'react-native'
import Colors from '../assets/styles';
import Icon from 'react-native-vector-icons/Feather';
import { connect, useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Creators as UserActions } from '../store/ducks/user'

const Followers = ({ navigation }) => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.user)

    useEffect(() => {
        dispatch(UserActions.getFollowersRequest(userData?.userData?.login))
    }, [userData?.userData])

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: Colors.background }}>
            {
                userData.followersLoading ? <ActivityIndicator /> : (
                    <>
                        <View style={styles.header}>

                            <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backArrow}>
                                <Icon name="arrow-left" size={22} color='white' />
                            </TouchableOpacity>

                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <Text style={styles.hashtag}>
                                    {userData?.userData?.followers + ' seguidores'}
                                </Text>
                            </View>
                        </View>

                        <FlatList
                            data={userData.followersData}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity onPress={() => { navigation.navigate('Follower', { follower: item }) }} style={styles.container}>
                                        <View style={styles.content}>

                                            <View style={styles.yellowBox} />

                                            <View style={styles.image}>
                                                <Image source={{ uri: item.avatar_url }} style={{ width: 58, height: 58, borderRadius: 100 }} />
                                            </View>

                                            <Text style={styles.hashtag}>
                                                {'#' + item.login}
                                            </Text>

                                            <View style={styles.arrowView}>
                                                <Icon name="arrow-right" size={20} color='white' />
                                            </View>

                                        </View>
                                    </TouchableOpacity>
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
        height: 100,
        justifyContent: 'center',
        backgroundColor: Colors.background
    },
    content: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    yellowBox: {
        width: 20,
        height: 42,
        backgroundColor: Colors.yellow,
        borderRadius: 100,
        marginLeft: -10
    },
    image: {
        borderRadius: 100,
        width: 64,
        height: 64,
        borderWidth: 3,
        borderColor: 'white',
        marginLeft: 15
    },
    hashtag: {
        fontSize: 16,
        color: 'white',
        marginLeft: 20,
        fontWeight: 'bold'
    },
    arrowView: {
        position: 'absolute',
        right: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => {
    const { user } = state;
    return (
        {
            user: user
        }
    )
}

export default connect(mapStateToProps, null)(Followers);