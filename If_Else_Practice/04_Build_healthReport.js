
let score = 100;

if (score === 100) {

    console.log("Green Build");
} else if (score >= 90 && score <= 99) {
    console.log("Stable(investigate failures)");
} else if (score >= 70 && score <= 89) {
    console.log("Unstable");
} else if (score < 70) {

    console.log("Broken Build(block deployment)");

} else {
    console.log("Got the error");
}