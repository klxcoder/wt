import { getCustomAmPm, getCustomDate, getCustomDayNameFull, getCustomMonthNameFull } from "@hirishu10/simple-date-time";

// Current time
let data = new Date()
let hour = data.getHours()
let minute = data.getMinutes()
const year = data.getFullYear()
const amPm = getCustomAmPm().toUpperCase()
const date = getCustomDate()
const day = getCustomDayNameFull()
const month = getCustomMonthNameFull()

if (hour < 10) {
    hour = `0${hour}`
}
if (minute < 10) {
    minute = `0${minute}`
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let toDay;

switch (day) {
    case 'Monday': {
        toDay = 0
        break;
    }
    case 'Tuesday': {
        toDay = 1
        break;
    }
    case 'Wednesday': {
        toDay = 2
        break;
    }
    case 'Thursday': {
        toDay = 3
        break;
    }
    case 'Friday': {
        toDay = 4
        break;
    }
    case 'Saturday': {
        toDay = 5
        break;
    }
    case 'Sunday': {
        toDay = 6
        break;
    }
    default:
        console.log('err');
}

export { hour, minute, year, amPm, date, day, month, toDay, daysOfWeek }