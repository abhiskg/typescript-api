"use strict";
const usersList = document.querySelector("[data-users-list]");
function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((data) => {
        const p = document.createElement("p");
        p.innerText = data.title;
        console.log(p);
        usersList.append(p);
    });
}
function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => displayData(data));
}
function displayData(data) {
    console.log(data[0]);
    data.forEach((user) => {
        const { id, name } = user;
        const div = document.createElement("div");
        div.classList.add("user");
        div.innerHTML = `<div>Id: ${id}</div>
    <div>Name: ${name}</div>`;
        usersList.append(div);
    });
}
