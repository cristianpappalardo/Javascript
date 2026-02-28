/**
 * @file main.js
 * @author Cristian Pappalardo
 * contains exercise
 *
 * Loop through scores from 60 to 100 and print each score with its letter grade
 * by reusing the assignGrade function from the previous exercise.
 */

import { assignGrade } from "../../03-grade-master/scripts/main";   

// Print grades for scores in increments of 5
for ( let score = 60; score <= 100; score += 5) {
    console.log("For a score of " + score + ", the grade is " + assignGrade(score));
}