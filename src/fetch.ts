const usersList = document.querySelector("[data-users-list]") as HTMLDivElement;

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

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function displayData(data: Users[]) {
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
