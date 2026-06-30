let rajkumar_age = 18;
let rj_will_goa = rajkumar_age >= 18 ? "will go goa" : "no goa";
console.log(rj_will_goa);


let actualStatuscode = 200;
let expectedStatuscode = 200;
let result = actualStatuscode === expectedStatuscode ? "Pass" : "Fail";
console.log(result);

let environment = "staging";
let baseURL = environment === "prod" ? "https://api.example.com" : "https://api.staging.example.com";
console.log(baseURL);

let responseTime = 850;
let sla = 1000;

let slaStatus = responseTime <= sla ? "within sla" : "sla break";
console.log(slaStatus);

let condition = true;
let srkMale = condition ? "True" : "False";
console.log(srkMale);

// Nested Ternary 

let age_pramod = 45;
let is_Pramod_D = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "NO Drink") : "No Goa";

console.log(is_Pramod_D);

/////////////////////// Nested IQ  ///////////////


let statusCode = 404;

let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :

            statusCode < 500 ? "Client error" : "server error";

console.log(`Status ${statusCode}: ${category}`);


