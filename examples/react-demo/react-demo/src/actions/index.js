const CLIENT_AUTH = {
    id: 'd26171a5b3080e402057',
    secret: '546fe1de5c60a93a9227a43d191e3bea1382bef3'
}

function getGists(gists) {
    return {
        type: 'GET_GISTS',
        gists
    }
}

export function fetchGists() {
    return async dispatch => {
        try {
            const url = `https://api.github.com/gists/public?client_id=${CLIENT_AUTH.id}&client_secret=${CLIENT_AUTH.secret}`;
            const response = await fetch(url);
            const data = await response.json();
            dispatch(getGists(data));
        }
        catch (ex) {
            console.error(ex);
        }
    }
}

function getUsers(users) {
    return {
        type: 'GET_USERS',
        users
    }
}

export function fetchUsers(usernames) {
    return dispatch => {
        try {
            usernames.map( async username => {
                const url = `https://api.github.com/users/${username}?client_id=${CLIENT_AUTH.id}&client_secret=${CLIENT_AUTH.secret}`;
                const response = await fetch(url);
                const data = await response.json();
                setTimeout(()=>{
                    dispatch(getUsers(data));
                    dispatch(loadingUsers(false));
                }, 3000);
            });
        }
        catch (ex) {
            console.error(ex);
        }
    }
}

export function loadingUsers(status) {
    return {
        type: 'LOADING_USERS',
        loading: status
    }
}