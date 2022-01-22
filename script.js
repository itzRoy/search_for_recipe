// variables

const search = document.querySelector("input");
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
const result = document.querySelector(".result");

// invoke on load
getdata();
// invoke when click search
btn.addEventListener("click", getdata);














// function get data search click

function getdata(arg = "ham") {
  let ing;
  search.value.trim() !== "" ? (ing = search.value.trim()) : (ing = arg);
  console.log(ing);
  let html = "";
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
    .then((res) => res.json())
    .then((data) => {
      data.meals.forEach((meal) => {
        html += `
          <div class="card" data-id="${meal.idMeal}">
                  <img src="${meal.strMealThumb}" alt="food">
                  <p>${meal.strMeal}</p>
                  <button class="recipe">Get Recipe</button>
              <div class="recipe-card hiden">
                  <button class="close"><i class="fas fa-times-circle"></i></button>
                  <p></p>
                </div>
              </div>
        `;
      });
      container.innerHTML = html;
    })
    .then(() => {
      const recipeBtn = document.querySelectorAll(".recipe");
      recipeBtn.forEach((e) => {
        e.addEventListener("click", function (e) {
          let show = e.target.nextElementSibling;
          let thisCard = e.target.parentNode;
          let hide = e.target.nextElementSibling.querySelector("button");
          console.log(thisCard.getAttribute("data-id"));
          getrecipebtn(thisCard);
          show.classList.remove("hiden");
          hide.addEventListener("click", function (e) {
            show.classList.add("hiden");
          });
        });
      });
    });
}




// function get data for the hidden element

async function getrecipebtn(id) {
  // console.log(typeof mealRecipe.idMeal);
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.getAttribute(
    "data-id"
  )}
  `)
    .then((res) => res.json())
    .then(
      (dt) =>
        (id.querySelector(".recipe-card").querySelector("p").innerText =
          dt.meals[0].strInstructions)
    );
}
