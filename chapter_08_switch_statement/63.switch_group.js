

let browser = "brave";

switch (browser) {

    case "Chrome":
    case "edge":
    case "opera":
    case "brave":
        console.log("You are using a Chromium-based browser.");
        break;
    case "Firefox":
        console.log("You are using Firefox.");
        break;
    case "Safari":
        console.log("You are using Safari.");
        break;
    default:
        console.log("Unknown browser.");

}