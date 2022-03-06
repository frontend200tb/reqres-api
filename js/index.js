console.log('start frontend200tb reqres-api');


/*****************
Константы
*****************/
const gallery = document.querySelector(".gallery");



/*****************
Переменные
*****************/
//let urlApi = "./js/users.json";
let urlApi = "https://reqres.in/api/users";


/*****************
Функции
*****************/
/*******************
Получение данных от API при загрузке страницы
*******************/
async function getImage() {
  event.preventDefault();
  console.log("вошли в функцию");
  while (gallery.firstChild) {
    gallery.removeChild(gallery.firstChild);
  }
  const response = await fetch(urlApi);
  const data = await response.json();
  console.log("data", data);
  displayImg(data);
}

function displayImg(json) {
  json.data.forEach((result) => {
    // Получим данные объекта через деструктуризацию
    const {id, email, first_name, last_name, avatar} = result;
    console.log('result', id, email, first_name, last_name, avatar);

    gallery.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
				<div class="img" style="background-image: url(${avatar});"></div>
        <div>${id}</div>
        <div>${email}</div>
        <div>${first_name}</div>
        <div>${last_name}</div>

			</div>`
    );
  });
}


/*****************
События
*****************/
// Получение данных от API при загрузке страницы
document.addEventListener("DOMContentLoaded", getImage);


console.log('end frontend200tb reqres-api');
