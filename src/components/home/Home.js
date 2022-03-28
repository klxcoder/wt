import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import clsx from 'clsx';
import { BiSearchAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { API_FETCH_REQUEST } from '../../redux/actions'
import { hour, minute, year, amPm, date, day, month, toDay } from '../../services/timeWeather';

const Home = () => {

    const [valueInput, setValueInput] = useState()
    const [weatherDay, setWeatherDay] = useState(0)
    const [messageError, setMessageError] = useState(false)
    const [rainNotification, setRainNotification] = useState(false)

    // redux
    const dispatch = useDispatch()
    const data = useSelector(state => state.api)

    // request api
    useEffect(() => {
        dispatch(API_FETCH_REQUEST({ id: toDay, nameCity: 'ha noi' }))
    }, [])

    // handle weather if it rains
    useEffect(() => {
        if (data.detalsWeather.icon == '10n') {
            setRainNotification(true)
        } else {
            setRainNotification(false)
        }
    }, [data])

    // submit city name and id-(day of the week)
    const handleCitySearch = () => {
        dispatch(API_FETCH_REQUEST({ id: weatherDay, nameCity: valueInput }))
    }

    // input value when searching
    const handleSearchValue = (e) => {
        setValueInput(e)
        // user import input --> remote error
        data.messageError = false
    }


    return (

        < div className={styles.homeWeather} >
            <div className={styles.boxSearch}>
                <div className={styles.titleSearch}>Your city</div>
                <div className={clsx(styles.inputSearch, data.messageError ? styles.colorError : '' )}>
                    <BiSearchAlt onClick={handleCitySearch} />
                    <input
                        onChange={e => handleSearchValue(e.target.value)}
                        placeholder='Search for places ...'
                    />
                </div>
            </div>
            {
                data.messageError && <div className={styles.notFoundCity}>
                    {valueInput} city not found
                </div>
            }

            <div className={styles.presentTime}>
                <span className={styles.hour}>{hour}:{minute} {amPm}, </span>
                <span className={styles.week}>{day}, </span>
                <span className={styles.month}>{month} {date}, </span>
                <span className={styles.year}>{year}</span>
            </div>

            {rainNotification && <div className={styles.rainNotification}>
                Trời có mưa, hãy mang theo dù!
            </div>}

            <div className={styles.weatherInfo}>
                <div className={styles.mainInfo}>
                    <div className={styles.currentWeatherPhoto}>
                        <img src={`http://openweathermap.org/img/wn/${data.detalsWeather.icon}@2x.png`}></img>
                    </div>
                    <div className={styles.temperature}>
                        {data.detalsWeather.temp}
                    </div>
                </div>

                <h1 className={styles.nameCity}>{data.detalsWeather.name}</h1>

                <div className={styles.infoSupplement}>
                    <div className={styles.humidity}>
                        <h3>Humidity</h3>
                        <div className={styles.parameter}>{data.detalsWeather.humidity}</div>
                    </div>

                    <div className={styles.windSpeed}>
                        <h3>Wind speed</h3>
                        <div className={styles.parameter}>{data.detalsWeather.windSpeed} km/h</div>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Home;