export function getGists(gists) {
    return {
        type: 'GET_GISTS',
        gists
    }
}

export function fetchGists() {
    return async dispatch => {
        try {
            const url = 'https://api.github.com/gists/public';
            const response = await fetch(url);
            const data = await response.json();
            dispatch(getGists(data));
        }
        catch (ex) {
            console.error(ex);
        }
    }
}