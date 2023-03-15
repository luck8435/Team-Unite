import * as UserApi from '../api/UserRequest.js';

export const updateUser = (id, formData) => async (dispath) => {
    dispath({type: "UPDATING_START"});
    try {
        const {data} = await UserApi.updateUser(id, formData);
        dispath({type: "UPDATING_SUCCESS", data: data});
    } catch (error) {
        dispath({type: "UPDATING_FAIL"});
    }
}

export const followUser = (id, data) => async (dispatch) => {
    dispatch({type: "FOLLOW_USER"});
    UserApi.followUser(id, data);
}

export const unFollowUser = (id, data) => async (dispatch) => {
    dispatch({type: "UNFOLLOW_USER"});
    UserApi.unFollowUser(id, data);
}