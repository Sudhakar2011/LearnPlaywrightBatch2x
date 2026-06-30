
let statusCode = 200;

if (statusCode >= 200 && statusCode <= 299) {

    console.log("Success");
} else if (statusCode >= 300 && statusCode <= 399) {

    console.log("Redirectional");
} else if (statusCode >= 400 && statusCode <= 499) {
    console.log("Client error");
} else if (statusCode >= 500 && statusCode <= 599) {
    console.log("Server error");
} else {
    console.log("Invalid");
}