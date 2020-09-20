import {all} from 'redux-saga/effects'

import userSagas from './user'

export default function* rootSaga(){
    return yield all([
        userSagas()
    ]);
}