let x = prompt("enter your name:","");

if (x === "admin") {
    let y = prompt("enter the password:","");
    if (y == "" || y == null) {
        alert("Cancelled");
        alert("I don't know you");
    }else if (y == "themaster"){
        alert("Welcome!");
    }else{
        alert("Wrong password");
    }
}