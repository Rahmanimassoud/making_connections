

let request = document.querySelector("#numberOfRequests");
let connection = document.querySelector("#connections");
let username = document.querySelector("#username");

function remove(id){
    let element = document.querySelector(id);
    element.remove();
    request.innerText--;
}

function accept(id){
    let element = document.querySelector(id);
    element.remove();
    connection.innerText++;
    request.innerText--;
}

function edit(){
    username.innerText = "Davon M"
}