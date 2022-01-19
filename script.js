const search = document.querySelector("input");
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
const dt = document.createElement("p");




btn.addEventListener('click', getdata)

function getdata() {
  let ing = search.value.trim();
  let html = "";
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
    .then(res => res.json())
    .then(data => { data.meals.forEach(
      meal => {
        html += `<img src="${meal.strMealThumb}" style="width: 100px">`;
        console.log(meal)
      })
      container.innerHTML = html
      })
}


