import { assignGrade } from "../../03-grade-master/scripts/main";   

for ( let score = 60; score <= 100; score += 5) {
    console.log("For a score of " + score + ", the grade is " + assignGrade(score));
}