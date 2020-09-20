import {all, fork, call, takeLatest, put} from 'redux-saga/effects'
import {Creators as UserActions, Types as UserTypes} from '../../ducks/user'
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com'
})

function* getUser({payload}){
    try{
        const response = yield call(api.get, `/users/${payload}`);

        if(response.status === 200){
            yield put(UserActions.getUserSuccess(response.data))
        }else{
            yield put(UserActions.getUserFail())
        }
    }catch(error){
        yield put(UserActions.getUserFail())
    }
}

function* getRepos({payload}){
    try{
        const response = yield call(api.get, `/users/${payload}/repos`);

        if(response.status === 200){
            yield put(UserActions.getReposSuccess(response.data))
        }else{
            yield put(UserActions.getReposFail())
        }
    }catch(error){
        yield put(UserActions.getReposFail())
    }
}

function* getFollowers({payload}){
    try{
        const response = yield call(api.get, `/users/${payload}/followers`);

        if(response.status === 200){
            yield put(UserActions.getFollowersSuccess(response.data))
        }else{
            yield put(UserActions.getFollowersFail())
        }
    }catch(error){
        yield put(UserActions.getFollowersFail())
    }
}

function* getFollowing({payload}){
    try{
        const response = yield call(api.get, `/users/${payload}/following`);

        if(response.status === 200){
            yield put(UserActions.getFollowingSuccess(response.data))
        }else{
            yield put(UserActions.getFollowingFail())
        }
    }catch(error){
        yield put(UserActions.getFollowingFail())
    }
}

function* getFollower({payload}){
    try{
        const response = yield call(api.get, `/users/${payload}`);

        if(response.status === 200){
            yield put(UserActions.getFollowerSuccess(response.data))
        }else{
            yield put(UserActions.getFollowerFail())
        }
    }catch(error){
        yield put(UserActions.getFollowerFail())
    }
}

function* getUserWatcher(){
    yield takeLatest(UserTypes.GET_USER_REQUEST, getUser);
}

function* getReposWatcher(){
    yield takeLatest(UserTypes.GET_REPOS_REQUEST, getRepos);
}

function* getFollowersWatcher(){
    yield takeLatest(UserTypes.GET_FOLLOWERS_REQUEST, getFollowers);
}

function* getFollowingWatcher(){
    yield takeLatest(UserTypes.GET_FOLLOWING_REQUEST, getFollowing);
}

function* getFollowerWatcher(){
    yield takeLatest(UserTypes.GET_FOLLOWER_REQUEST, getFollower);
}

export default function* rootSaga(){
    return yield all([
        fork(getUserWatcher),
        fork(getReposWatcher),
        fork(getFollowersWatcher),
        fork(getFollowingWatcher),
        fork(getFollowerWatcher)
    ]);
}