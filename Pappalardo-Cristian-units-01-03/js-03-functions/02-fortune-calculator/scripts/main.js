/**
 * @file main.js
 * @author Cristian Pappalardo
 * Fortune Calculator Exercise
 * 
 * This program defines a function called tellFortune that takes in parameters such as
 * the number of children, partner's name, geographic location, and job title to generate a fortune message.
 * The function then returns the generated fortune message, which is displayed in the console.
 */

/**
 * This function generates a fortune message based on the provided parameters.
 * @param {number} num_children - The number of children the person will have
 * @param {string} partner_name - The name of the person's partner
 * @param {string} geographic_location - The geographic location where the person will live
 * @param {string} job_title - The job title the person will have
 * @returns {string} The generated fortune message
 */
function tellFortune(num_children, partner_name, geographic_location, job_title) {
    return "You will be a " + job_title + " in " + geographic_location + ", and married to " + partner_name + " with " + num_children + " kids.";
}

// Example usage:
console.log(tellFortune(3, "Alice", "New York", "Software Engineer"));
console.log(tellFortune(2, "Bob", "Los Angeles", "Designer"));
console.log(tellFortune(4, "Charlie", "Chicago", "Teacher"));