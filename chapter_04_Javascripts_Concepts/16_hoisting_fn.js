function getUserStatus() {
    console.log(status_code); // undefined due to hoisting

    var status_code = "Active";
    console.log(status_code); // "Active" after assignment

}
getUserStatus();