/**
 * @file main.js
 * @author Cristian Pappalardo
 * Get Weekday Exercise  
 */

/**
 * gets the day of the week for a given date and logs it to the console.
 * @param {Date} date - A Date object representing the date for which to determine the day of the week. 
 * logs the corresponding day of the week (SU, MO, TU, WE, TH, FR, SA) based on the input date.
 */


function getWeekDay(date){
    switch (date) {
        case 0:
            console.log('SU')
            break;
    
        case 1:
            console.log('MO')
            break;
    
        case 2:
            console.log('TU')
            break;
    
        case 3:
            console.log('WE')
            break;
    
        case 4:
            console.log('TH')
            break;
    
        case 5:
            console.log('FR')
            break;
    
        case 6:
            console.log('SA')
            break;
    
        default:
            break;
    }
}

// Get the current day of the week
let date = new Date;
weekDay = date.getDay()
// Call the function with the current day of the week
getWeekDay(weekDay)