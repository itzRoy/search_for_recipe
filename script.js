// const search = document.querySelector("input");
// const btn = document.querySelector("#btn");
// const container = document.querySelector(".container");
// const result = document.querySelector(".result");
// const recipe = document.querySelectorAll("button.recipe");
// const recipeCard = document.querySelectorAll("recipe-card");

// btn.addEventListener("click", getdata);


// function getdata() {
//   let ing = search.value.trim();
//   let html = "";
//   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
//     .then((res) => res.json())
//     .then((data) => {
//       data.meals.forEach((meal) => {
//         html += `
//         <div class="card">
//                   <img src="${meal.strMealThumb}" alt="food">
//                   <p>${meal.strMeal}</p>
//                   <button class="recipe">Get Recipe</button>
//                   <div class="recipe-card">
//                   <button class="close"><i class="fas fa-times-circle"></i></button>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque laudantium, non sunt et optio. Mollitia porro culpa aperiam eius fugiat quis, nam assumenda veritatis suscipit illo vero accusamus id!</p>
//               </div>
//         </div>          
         
//         `;
     
//         console.log(meal);
//       });
//       result.classList.remove("hiden");
//       container.innerHTML = html;
//     });
  
// }


  
const recipeBtn = document.getElementById("recipe");
const recipeCard = document.querySelector(".recipe-card");
const btnClose = document.querySelector('.close');

btnClose.addEventListener('click', () => {
  recipeCard.classList.add('hiden');
})
recipeBtn.addEventListener('click', () => {
  recipeCard.classList.remove('hiden')
})