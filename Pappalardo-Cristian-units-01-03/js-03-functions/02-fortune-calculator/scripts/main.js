function tellFortune(num_children, partner_name, geographic_location, job_title) {
    return "You will be a " + job_title + " in " + geographic_location + ", and married to " + partner_name + " with " + num_children + " kids.";
}

// Example usage:
console.log(tellFortune(3, "Alice", "New York", "Software Engineer"));
console.log(tellFortune(2, "Bob", "Los Angeles", "Designer"));
console.log(tellFortune(4, "Charlie", "Chicago", "Teacher"));