import React from 'react';

import Login from './src/pages/Login'
import Main from './src/pages/Main'
import Repos from './src/pages/Repos'
import Followers from './src/pages/Followers'
import Following from './src/pages/Following'
import Follower from './src/pages/Follower'

import { Provider } from 'react-redux'
import store from './src/store'

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
console.disableYellowBox = true;
import Icon from 'react-native-vector-icons/Feather'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
    return (
        <Tab.Navigator 
        
        screenOptions={({ route }) => ({
            tabBarIcon: ({color}) => {
                let iconName;

                switch (route.name) {
                    case 'Home':
                        iconName = 'home';
                        break;
                    case 'Repos':
                        iconName = 'github';
                        break;
                    case 'Seguidores':
                        iconName = 'users';
                        break;
                    case 'Seguindo':
                        iconName = 'users';
                        break;
                }

                return <Icon name={iconName} size={25} color={color} style={{marginBottom:-10}} />;
            },
        })}
            tabBarOptions={
                {
                activeTintColor: 'black',
                inactiveTintColor: '#969696',
                style:{
                    borderTopLeftRadius:15, 
                    borderTopRightRadius:15,
                    backgroundColor:"white",
                    position:'absolute',
                    bottom: 0,
                    padding:10,
                    width: '100%',
                    height: 75,
                    zIndex: 8 
                 },
                labelStyle: {
                    fontSize: 15,
                    marginBottom: 11
                }
            }}
        >
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name="Repos" component={Repos} />
            <Tab.Screen name="Seguidores" component={FollowersStack} />
            <Tab.Screen name="Seguindo" component={FollowingStack} />
        </Tab.Navigator>
    )
}

function FollowersStack() {
    return (
        <Stack.Navigator initialRouteName="Followers" >
            <Stack.Screen name="Followers" component={Followers} options={{ headerShown: false }} />
            <Stack.Screen name="Follower" component={Follower} options={{ headerShown: false }} />
        </Stack.Navigator >
    )
}

function FollowingStack() {
    return (
        <Stack.Navigator initialRouteName="Following" >
            <Stack.Screen name="Following" component={Following} options={{ headerShown: false }} />
            <Stack.Screen name="Follower" component={Follower} options={{ headerShown: false }} />
        </Stack.Navigator >
    )
}

function Routes() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" >
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />
                    <Stack.Screen name="Repos" component={Tabs} options={({ route }) => {
                        return {
                            headerStyle: { backgroundColor: "#1F1F1F" },
                            headerTintColor: 'white',
                            headerTitleAlign: 'center',
                            cardStyle: {
                                backgroundColor: '#292929'
                            }
                        }
                    }}
                    />
                    <Stack.Screen name="Followers" component={Tabs} options={{
                        headerStyle: { backgroundColor: "#1F1F1F" },
                        headerTintColor: 'white',
                        headerTitleAlign: 'center',
                        cardStyle: {
                            backgroundColor: '#292929'
                        }
                    }}
                    />
                    <Stack.Screen name="Following" component={Tabs} options={{ headerShown: false }} />
                    <Stack.Screen name="Follower" component={Follower} options={{ headerShown: false }} />
                </Stack.Navigator >
            </NavigationContainer>
        </Provider>
    )
}

export default Routes;