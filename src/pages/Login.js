import React, { useState, useEffect } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native'
import Colors from '../assets/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Creators as UserActions } from '../store/ducks/user'
import { useDispatch, useSelector } from 'react-redux'

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)

    const [userInput, setUserInput] = useState('')
    const [empty, setEmpty] = useState(false)

    useEffect(() => {
        if (userData.userData) {
            navigation.navigate('Main');
        }
    }, [userData.userData])

    useEffect(() =>{
        if (userData.userError) {
            setEmpty(true);
        }else{
            setEmpty(false)
        }
    },[userData.userError])

    return (
        <View style={styles.container}>

            <Image source={require('../assets/images/github.png')} style={styles.image} />

            <View style={{ width: '100%', alignItems: 'center' }}>

                <TextInput placeholder="Usuário" placeholderTextColor={Colors.placeholder} style={styles.input}
                    value={userInput} onChangeText={input => { setUserInput(input) }}
                />

                {
                    empty &&
                    <Text style={styles.error}>
                        Campo obrigatório
                    </Text>
                }
            </View>

            <TouchableOpacity style={styles.button} onPress={() => {
                if (userInput === "") {
                    setEmpty(true)
                } else {
                    dispatch(UserActions.getUserRequest(userInput));
                    setEmpty(false)
                }
            }}>
                <Text style={styles.textButton}>
                    ENTRAR
                    </Text>
                <Icon name="arrow-forward-outline" size={25} color="black" style={{ marginLeft: 5 }} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderRadius: 10,
        borderRadius: 10,
        borderWidth: 1,
        width: '95%',
        backgroundColor: 'white',
        marginBottom: 15,
        paddingLeft: 15,
        fontSize: 20
    },
    button: {
        backgroundColor: Colors.yellow,
        borderRadius: 10,
        width: '95%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 20
    },
    image: {
        width: 98.12,
        height: 96.78,
        marginBottom: 40
    },
    error: {
        position: 'absolute',
        color: 'red',
        top: 15,
        right: 30,
        fontSize: 14
    }
})

// export default connect(null, { checkInput })(Login);
export default Login;