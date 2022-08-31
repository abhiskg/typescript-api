// Showing Kanye
const loadKanye = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayKanye(data));
};

interface Kanye {
  quote: string;
}

const displayKanye = (data: Kanye) => {
  const kanye = document.querySelector("[data-kanye]") as HTMLQuoteElement;
  const div = document.createElement("div");
  div.textContent = data.quote;
  kanye.append(div);
};

// Random users
const loadRandomUser = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => showRandomUser(data));
};

const showRandomUser = ({ results }: any) => {
  const randomUser = document.querySelector(
    "[data-random-user]"
  ) as HTMLDivElement;
  results.forEach((result: any) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${result.name.first} ${result.name.last}</h3>
    <p>${result.email}</p>
    `;
    randomUser.append(div);
    console.log(result.name.first);
  });
};

// Load Countries
const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showCountries(data));
};

const showCountries = (countries: any) => {
  const countriesContainer = document.querySelector(
    "[data-countries-container]"
  ) as HTMLDivElement;
  countries.forEach((country: any) => {
    const divElement = document.createElement("div");
    divElement.classList.add("country");
    divElement.innerHTML = `<h3>Name: ${country.name.common}</h3>
    <h4>Capital: ${country.capital ? country.capital[0] : "No Capital"}</h4>
    <button onclick="loadCountryDetails('${country.cca2}')" >Details</button>`;
    countriesContainer.append(divElement);
  });
};

const loadCountryDetails = (code: string) => {
  fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((res) => res.json())
    .then((data) => console.log(data[0]))
    .catch((err) => console.log(err));
};

// Load Meals
const loadMeals = () => {
  const inputMeal = document.querySelector("#input-meal") as HTMLInputElement;
  const inputValue = inputMeal.value;
  inputMeal.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showMeals(data.meals))
    .catch((err) => console.log(err));
};

const showMeals = (meals: any) => {
  const mealsContainer = document.querySelector(
    "[data-meals-container]"
  ) as HTMLDivElement;
  mealsContainer.textContent = "";
  meals.forEach((meal: any) => {
    const elementDiv = document.createElement("div");
    elementDiv.classList.add("col");
    elementDiv.innerHTML = `<div onclick="loadMealDetails(${
      meal.idMeal
    })" class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>
  </div>`;
    mealsContainer.append(elementDiv);
  });
};

const loadMealDetails = async (idMeal: number) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.meals[0]);
  } catch (error) {
    console.log(error);
  }
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data.meals[0]));
};
