/**
 * A very simple function that sets the time for the textspace
 * @returns string
 */
function displayTheTime(){
    console.log("Button was clicked!");
    var t = new Date();
    
    document.getElementById("textSpace").innerHTML = t.toTimeString();
}