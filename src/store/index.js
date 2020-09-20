import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducers from './ducks';

const sagaMonitor = null ;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [];
middleware.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middleware));

const store = createStore(rootReducers, composer);

sagaMiddleware.run(rootSaga);

export default store;