export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS': {
            localStorage.setItem('token', action.token);
            window.location.replace('/');
            return { ...state };
        }

        case 'LOGIN_FAILURE': {
            return { ...state, loginError: action.error };
        }

        case 'REGISTER_SUCCESS': {
            localStorage.setItem('token', action.token);
            window.location.replace('/');
            return { ...state };
        }

        case 'REGISTER_FAILURE': {
            return { ...state, registerError: action.error };
        }

        default: {
            return state;
        }
    }
};
