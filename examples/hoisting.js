////////////////////
////// BEHIND THE SCENES/////////
// var foo;
///////////////////
// hoisting
foo();

// function foo(){
//     console.log("foo");
// }

var foo = function(){
    // var bar; // BEHIND THE SCENES
    console.log("foo");
    var bar = function(){
        console.log("bar");
    }
}