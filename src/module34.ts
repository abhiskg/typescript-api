const searchField = document.querySelector("#search-field") as HTMLInputElement;

const processSearch = (dataLimit: number) => {
  toggleSpinner(true);
  const searchValue = searchField.value;
  searchField.value = "";
  loadPhones(searchValue, dataLimit);
};

searchField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    processSearch(10);
  }
});

const searchBtn = document.querySelector("#search-btn") as HTMLDivElement;
searchBtn.addEventListener("click", () => {
  processSearch(10);
});

const loadPhones = async (searchValue: string, dataLimit: number) => {
  const warningElement = document.querySelector(
    "#warning-element"
  ) as HTMLDivElement;

  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    );

    const { data } = await res.json();

    if (data.length === 0) {
      toggleSpinner(false);
      warningElement.classList.remove("d-none");
    } else {
      warningElement.classList.add("d-none");
    }
    showPhones(data, dataLimit);
    toggleSpinner(false);
  } catch (error) {
    console.log(error);
  }
};

interface Phones {
  brand: string;
  phone_name: string;
  slug: string;
  image: string;
}

const showPhones = (phones: Phones[], dataLimit: number) => {
  const phoneContainer = document.querySelector(
    "[data-phone-container]"
  ) as HTMLDivElement;
  phoneContainer.textContent = "";

  if (dataLimit > 0 && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAllBtn(true);
  } else {
    showAllBtn(false);
  }
  phones.forEach((phone) => {
    const divElement = document.createElement("div");
    divElement.classList.add("col");
    divElement.innerHTML = `<div class="card p-2">
    <img src="${phone.image}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <p class="card-text">
        Let's buy new phone. Got new Phone.... Hurrah!
      </p>
      <button onClick="loadDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal" >Show Details</button>
    </div>
  </div>`;
    phoneContainer.append(divElement);
  });
};

const toggleSpinner = (isLoading: boolean) => {
  const spinnerSection = document.querySelector(
    "[data-spinner-section]"
  ) as HTMLElement;
  if (isLoading) {
    spinnerSection.classList.remove("d-none");
  } else {
    spinnerSection.classList.add("d-none");
  }
};

const showAllBtn = (shouldShow: boolean) => {
  const buttonElement = document.querySelector("#show-all-btn") as HTMLElement;
  if (shouldShow) {
    buttonElement.classList.remove("d-none");
  } else {
    buttonElement.classList.add("d-none");
  }
};

const loadShowAll = () => {
  processSearch(0);
};

const loadDetails = async (slug: string) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${slug}`
  );
  const { data } = await res.json();
  showDetails(data);
};

const showDetails = (phone: any) => {
  console.log(phone);
  const title = document.querySelector(
    "#phoneDetailsModalLabel"
  ) as HTMLDivElement;
  title.innerText = phone.name;

  const phoneDetailsBody = document.getElementById(
    "phone-details-body"
  ) as HTMLDivElement;
  phoneDetailsBody.innerHTML = `
  <p>Release Date: ${
    phone.releaseDate ? phone.releaseDate : "No relese date"
  }</p>
  <p>Others: ${phone.others ? phone.others.Bluetooth : "No Blutooth Info"}</p>
  `;
};
