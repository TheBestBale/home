import {reactive} from 'vue'


const saveUser = function (u) {
    // console.log('stored token', token);
    state.user = u;
}


const state = reactive({
    token: null,
    user: null,
})

function setToken(newToken) {
    state.token = newToken
}

function getToken() {
    return state.token
}


const userRole = function () {
    if (!state.user) {
        return null;
    }
    return state.user.role;
}

const currentUser = function () {
    return state.user;
}

const logout = function(){
    saveUser(null);
    setToken(null);
}
export default {
    SaveAuthToken: setToken,
    GetAuthToken: getToken,
    SaveUser: saveUser,
    UserRole: userRole,
    User: currentUser,
    Logout: logout,
    state,
}


