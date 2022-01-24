// variables

const search = document.querySelector("input");
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
const result = document.querySelector(".result");

// invoke on load
getdata();
// invoke when click search
btn.addEventListener("click", getdata);


// fetch search click

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

}

// get recipe fetch
container.addEventListener("click", function(e) {
    if (e.target.classList.contains("recipe")) {
        let show = e.target.nextElementSibling,
            hide = e.target.nextElementSibling.querySelector("button"),
            id = e.target.parentNode;
        show.classList.remove("hiden");
        hide.addEventListener("click", function(e) {
            show.classList.add("hiden");
        })
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.getAttribute(
      "data-id"
    )}
  `)
            .then((res) => res.json())
            .then((dt) => {
                id.querySelector(".recipe-card").querySelector("p").innerHTML =
                    dt.meals[0].strInstructions;
            });
    }

})