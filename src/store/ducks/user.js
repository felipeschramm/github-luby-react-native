export const Types = {
    GET_USER_REQUEST: 'GET_USER_REQUEST',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_FAIL: 'GET_USER_FAIL',
    GET_USER_CLEAR: 'GET_USER_CLEAR',

    GET_REPOS_REQUEST: 'GET_REPOS_REQUEST',
    GET_REPOS_SUCCESS: 'GET_REPOS_SUCCESS',
    GET_REPOS_FAIL: 'GET_REPOS_FAIL',

    GET_FOLLOWERS_REQUEST: 'GET_FOLLOWERS_REQUEST',
    GET_FOLLOWERS_SUCCESS: 'GET_FOLLOWERS_SUCCESS',
    GET_FOLLOWERS_FAIL: 'GET_FOLLOWERS_FAIL',

    GET_FOLLOWING_REQUEST: 'GET_FOLLOWING_REQUEST',
    GET_FOLLOWING_SUCCESS: 'GET_FOLLOWING_SUCCESS',
    GET_FOLLOWING_FAIL: 'GET_FOLLOWING_FAIL',

    GET_FOLLOWER_REQUEST: 'GET_FOLLOWER_REQUEST',
    GET_FOLLOWER_SUCCESS: 'GET_FOLLOWER_SUCCESS',
    GET_FOLLOWER_FAIL: 'GET_FOLLOWER_FAIL',


}

const INITIAL_STATE = {
    userLoading: false,
    userError: false,
    userData: null,

    reposLoading: false,
    reposError: false,
    reposData: null,

    followersLoading: false,
    followersError: false,
    followersData: null,

    followingLoading: false,
    followingError: false,
    followingData: null,

    followerLoading: false,
    followerError: false,
    followerData: null,

}

export default function User(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_USER_REQUEST:
            return {
                ...state,
                userLoading: true,
                userError: false
            }
        case Types.GET_USER_SUCCESS:
            return {
                ...state,
                userLoading: false,
                userError: false,
                userData: action.payload
            }
        case Types.GET_USER_FAIL:
            return {
                ...state,
                userLoading: false,
                userError: true
            }
        case Types.GET_USER_CLEAR:
            return {
                ...state,
                userloading: false,
                userError: false,
                userData: null
            }
        case Types.GET_REPOS_REQUEST:
            return {
                ...state,
                reposLoading: true,
                reposError: false
            }
        case Types.GET_REPOS_SUCCESS:
            return {
                ...state,
                reposLoading: false,
                reposError: false,
                reposData: action.payload
            }
        case Types.GET_REPOS_FAIL:
            return {
                ...state,
                reposLoading: false,
                reposError: true
            }
        case Types.GET_FOLLOWERS_REQUEST:
            return {
                ...state,
                followersLoading: true,
                followersError: false
            }
        case Types.GET_FOLLOWERS_SUCCESS:
            return {
                ...state,
                followersLoading: false,
                followersError: false,
                followersData: action.payload
            }
        case Types.GET_FOLLOWERS_FAIL:
            return {
                ...state,
                followersLoading: false,
                followersError: true
            }
        case Types.GET_FOLLOWING_REQUEST:
            return {
                ...state,
                followingLoading: true,
                followingError: false
            }
        case Types.GET_FOLLOWING_SUCCESS:
            return {
                ...state,
                followingLoading: false,
                followingError: false,
                followingData: action.payload
            }
        case Types.GET_FOLLOWING_FAIL:
            return {
                ...state,
                followingLoading: false,
                followingError: true
            }
        case Types.GET_FOLLOWER_REQUEST:
            return {
                ...state,
                followerLoading: true,
                followerError: false
            }
        case Types.GET_FOLLOWER_SUCCESS:
            return {
                ...state,
                followerLoading: false,
                followerError: false,
                followerData: action.payload
            }
        case Types.GET_FOLLOWER_FAIL:
            return {
                ...state,
                followerLoading: false,
                followerError: true
            }
        default:
            return state;
    }
}

export const Creators = {
    getUserRequest: payload => ({
        type: Types.GET_USER_REQUEST,
        payload
    }),
    getUserSuccess: payload => ({
        type: Types.GET_USER_SUCCESS,
        payload
    }),
    getUserFail: () => ({
        type: Types.GET_USER_FAIL
    }),
    getUserClear: () => ({
        type: Types.GET_USER_CLEAR
    }),

    getReposRequest: payload => ({
        type: Types.GET_REPOS_REQUEST,
        payload
    }),
    getReposSuccess: payload => ({
        type: Types.GET_REPOS_SUCCESS,
        payload
    }),
    getReposFail: () => ({
        type: Types.GET_REPOS_FAIL
    }),

    getFollowersRequest: payload => ({
        type: Types.GET_FOLLOWERS_REQUEST,
        payload
    }),
    getFollowersSuccess: payload => ({
        type: Types.GET_FOLLOWERS_SUCCESS,
        payload
    }),
    getFollowersFail: () => ({
        type: Types.GET_FOLLOWERS_FAIL
    }),

    getFollowingRequest: payload => ({
        type: Types.GET_FOLLOWING_REQUEST,
        payload
    }),
    getFollowingSuccess: payload => ({
        type: Types.GET_FOLLOWING_SUCCESS,
        payload
    }),
    getFollowingFail: () => ({
        type: Types.GET_FOLLOWING_FAIL
    }),

    getFollowerRequest: payload => ({
        type: Types.GET_FOLLOWER_REQUEST,
        payload
    }),
    getFollowerSuccess: payload => ({
        type: Types.GET_FOLLOWER_SUCCESS,
        payload
    }),
    getFollowerFail: () => ({
        type: Types.GET_FOLLOWER_FAIL
    })
}