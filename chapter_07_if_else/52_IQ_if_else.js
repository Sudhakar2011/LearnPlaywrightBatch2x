//if ("hello") console.log("String is truthy");
//if (42) console.log("number is truthy");
//if ({}) console.log("empty object is truthy");
//if ([]) console.log("empty array is truthy");


if ("") console.log("won't print");
if (undefined) console.log("won't print");
if (null) console.log("won't print");
if (NaN) console.log("won't print");

if (0) console.log("won't print")



////////////////////////////////

let name = undefined

if (name) {
    console.log("hi");
} else {
    console.log("bye");
}