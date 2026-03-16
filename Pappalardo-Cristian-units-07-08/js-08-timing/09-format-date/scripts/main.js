/**
 * @file main.js
 * @author Cristian Pappalardo
 * Format date exercise
 * 
 * The function formatDate(date) should format the date as follows:
 * - If since date passed less than 1 second, then "right now".
 * - Otherwise, if since date passed less than 1 minute, then "n sec. ago".
 * - Otherwise, if since date passed less than 1 hour, then "m min. ago".
 * - Otherwise, the full date in the format "DD.MM.YY HH:mm" should be returned.
 */

/**
 * Takes a Date object and returns a string representing how long ago that date was from now.
 * @param {Date} date the date to format 
 * @returns {string} the formatted date string
 */
function formatDate(date) {
    const now = new Date();
    const diff = now - date; // difference in ms

    if (diff < 1000) {
        return "right now";
    }

    const sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return `${sec} sec. ago`;
    }

    const min = Math.floor(diff / 60000);
    if (min < 60) {
        return `${min} min. ago`;
    }

    // Format: DD.MM.YY HH:mm
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear().toString().slice(-2);
    const h = date.getHours().toString().padStart(2, '0');
    const minStr = date.getMinutes().toString().padStart(2, '0');

    return `${d}.${m}.${y} ${h}:${minStr}`; // Return the formatted date string
}

// Example usage:
// console.log(formatDate(new Date(Date.now() - 500))); // "right now"
// console.log(formatDate(new Date(Date.now() - 5000))); // "5 sec. ago"
// console.log(formatDate(new Date(Date.now() - 65000))); // "1 min. ago"
// console.log(formatDate(new Date(2016, 3, 17, 10, 0))); // "17.04.16 10:00"