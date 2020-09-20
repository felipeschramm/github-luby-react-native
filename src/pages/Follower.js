import React, { useEffect } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, ActivityIndicator } from 'react-native'
import Colors from '../assets/styles';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux'
import { Creators as UserActions } from '../store/ducks/user'
import Profile from '../components/Profile'
import MenuInfo from '../components/MenuInfo'
import Bio from '../components/Bio'

const Follower = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const userData = useSelector(state => state.user)
    const { follower } = route.params;

    useEffect(() => {
        dispatch(UserActions.getFollowerRequest(follower.login))
    }, [])

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: Colors.background }}>
            {
                userData.followerLoading ? <ActivityIndicator color={'white'} size={'large'} /> :
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <View style={styles.header}>

                            <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.backArrow}>
                                <Icon name="arrow-left" size={22} color='white' />
                            </TouchableOpacity>

                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <Text style={styles.hashtag}>
                                    {'#' + userData?.followerData?.login}
                                </Text>
                            </View>

                            <TouchableOpacity onPress={() => { dispatch(UserActions.getUserRequest(userData?.followerData?.login)); navigation.navigate('Home') }} style={styles.pressSave}>
                                <Text style={{ fontSize: 17, marginRight: 5, color: 'white' }}>
                                    Salvar
                                </Text>
                                <Icon name="log-in" color={Colors.login} size={19} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.image}>
                            <Image source={{ uri: userData?.followerData?.avatar_url }} style={{ width: 109, height: 109, borderRadius: 100 }} />
                        </View>

                        <View style={styles.viewInfo}>
                            <View>

                                <Profile
                                    name={userData?.followerData?.name}
                                    email={userData?.followerData?.email}
                                    city={userData?.followerData?.location}
                                />

                                <MenuInfo
                                    numFlrs={userData?.followerData?.followers}
                                    numFlw={userData?.followerData?.following}
                                    numRepos={userData?.followerData?.public_repos}
                                />

                                <Bio
                                    bioText={userData?.followerData?.bio}
                                />

                            </View>
                        </View>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.darkBackground,
        width: '100%',
        height: 126,
        paddingTop: 20
    },
    backArrow: {
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        left: 15
    },
    hashtag: {
        color: 'white',
        marginLeft: 11,
        fontSize: 17,
        fontWeight: 'bold'
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
    },
    pressSave: {
        position: 'absolute',
        marginTop: 20,
        flexDirection: 'row',
        right: 20,
        alignItems: 'center'
    },
    viewInfo: {
        backgroundColor: Colors.background,
        width: '100%',
        height: '100%'
    }
})


export default Follower;