const initState = {
    weekWeather: [],
    detalsWeather: {
        name: '',
        temp: '',
        icon: '',
        humidity: '',
        windSpeed: ''
    },
    messageError: false
}

const apiReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'API_FETCH_SUCCEEDED':
            const id = action.payload.id
            return {
                weekWeather: action.payload.list,
                detalsWeather: {
                    name: action.payload.city.name,
                    temp: action.payload.list[id].main.temp.toFixed(0),
                    icon: action.payload.list[id].weather[0].icon,
                    humidity: action.payload.list[id].main.humidity,
                    windSpeed: action.payload.list[id].wind.speed.toFixed(1)
                },
                messageError: false
            }
        case 'API_FETCH_FAILED':
            return {
                ...state,
                messageError: true,
            }
        default:
            return state
    }
}

export default apiReducer;