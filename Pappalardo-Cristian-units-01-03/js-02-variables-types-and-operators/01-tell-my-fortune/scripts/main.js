/**
 * @file main.js
 * @author Cristian Pappalardo
 * Tell Fortune Exercise
 * 
 * This program generates a fortune message based on personal information such as 
 * the number of children, partner's name, geographic location, and job title. 
 * The message is then displayed in the console.
 */

// Store personal information
const numberOfChildren = 2;
const partnersName = "Julia";
const geographicLocation = "Los Angeles";
const jobTitle = "Software Developer";

// Create the fortune message
const fortuneMessage = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.";
// Display the fortune message
console.log(fortuneMessage);
