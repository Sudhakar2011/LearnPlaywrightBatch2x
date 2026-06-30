let impact_score = 9;

if (impact_score === 9 || impact_score === 10) {
    console.log("Critical - block release");
} else if (impact_score === 7 || impact_score === 8) {
    console.log(" High");
} else if (impact_score >= 4 && impact_score <= 6) {
    console.log("Medium");
} else if (impact_score >= 1 && impact_score <= 3) {
    console.log("Low");
} else {
    console.log("Invalid Score");
}