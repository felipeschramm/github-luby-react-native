import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text, ScrollView, Image, ActivityIndicator } from 'react-native'
import Colors from '../assets/styles';
import Icon from 'react-native-vector-icons/Feather';
import MenuInfo from '../components/MenuInfo'
import Bio from '../components/Bio'
import Profile from '../components/Profile';
import { useDispatch, useSelector } from 'react-redux'
import { Creators as UserActions } from '../store/ducks/user'


const Main = ({ navigation }) => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: Colors.background }}>
            <ScrollView>

                {
                    userData.userLoading ? <ActivityIndicator /> : (


                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <View style={styles.header}>

                                <Text style={styles.hashtag}>
                                    {'#' + userData?.userData?.login}
                                </Text>

                                <TouchableOpacity onPress={() => { dispatch(UserActions.getUserClear()); navigation.replace('Login') }} style={styles.logoutPress}>
                                    <Text style={styles.logoutText}>
                                        Sair
                            </Text>
                                    <Icon name="log-out" color={Colors.logout} size={19} />
                                </TouchableOpacity>

                            </View>

                            <View style={styles.image}>
                                <Image source={{ uri: userData?.userData?.avatar_url }} style={{ width: 109, height: 109, borderRadius: 100 }} />
                            </View>

                            <View style={{ backgroundColor: Colors.background, width: '100%', height: '100%' }}>
                                <View>

                                    <Profile
                                        name={userData?.userData?.name}
                                        email={userData?.userData?.email}
                                        city={userData?.userData?.location} />

                                    <MenuInfo
                                        pressFoll={() => { this.props.navigation.navigate('Followers') }}
                                        pressRepos={() => { this.props.navigation.navigate('Repos') }}
                                        numFlrs={userData?.userData?.followers}
                                        numFlw={userData?.userData?.following}
                                        numRepos={userData?.userData?.public_repos}
                                    />

                                    <Bio bioText={userData?.userData?.bio} />

                                </View>
                            </View>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.darkBackground,
        width: '100%',
        height: 126
    },
    hashtag: {
        color: 'white',
        marginLeft: 11,
        marginTop: 23,
        fontSize: 17,
        fontWeight: 'bold'
    },
    logoutPress: {
        position: 'absolute',
        marginTop: 23,
        flexDirection: 'row',
        right: 29,
        alignItems: 'center'
    },
    logoutText: {
        fontSize: 17,
        marginRight: 10,
        color: 'white'
    },
    image: {
        borderRadius: 100,
        width: 115,
        height: 115,
        borderWidth: 3,
        borderColor: 'white',
        position: 'absolute',
        top: 69,
        zIndex: 2
    }
})

export default Main;