

console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100;



{
    /////////////// TDZ for score starts here ////////////////

    // console.log(score); // ReferenceError: Cannot access 'score' before initialization
    // score =100; // ReferenceError: Cannot access 'score' before initialization
    // typeof score; // ReferenceError: Cannot access 'score' before initialization

    // TDZ for score ends here  ///////////////

    let score = 100; // declaration and initialization of score
    console.log(score); // 100 // 100 safe to access score here


}