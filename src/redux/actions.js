const API_FETCH_REQUEST = (payload) => {
    return {
        type: 'API_FETCH_REQUEST',
        payload: payload
    }
}

const API_FETCH_SUCCEEDED = (payload) => {
    return {
        type: 'API_FETCH_SUCCEEDED',
        payload: payload
    }
}

const API_FETCH_FAILED = (payload) => {
    return {
        type: 'API_FETCH_FAILED',
        payload: payload
    }
}

export { API_FETCH_REQUEST, API_FETCH_SUCCEEDED, API_FETCH_FAILED };