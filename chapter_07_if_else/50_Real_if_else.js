
let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {

    if (userRole === "admin") {

        console.log("admin can do all the things");

    } else if (userRole === "editor") {

        console.log("welcome editor , edit access granted");

    } else if (userRole === "viewer") {

        console.log("welcome viewer , read only access");
    } else {

        console.log("No idea , you are may be guest");
    }

} else {

    console.log("you are not logged in");
}