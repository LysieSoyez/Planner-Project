import { remainingTime, checkDelay } from "./modules/Calculations.js";
import { sortBy } from "./modules/Sorting.js";
import { Tasks } from "./modules/Object.js";
import { NewTask } from "./modules/Class.js";

// Creating new Object
let trying = new NewTask("jardinage", "manger du chocolat", "2022-12-13", "dormir");
console.log(trying);

// AddingTask

// DisplayingTask

// ChangingStatus

let buttonTodo = document.getElementById("task__wrapper__head__done");
buttonTodo.addEventListener('click', () => {
   
   console.log("À remplir ici");

})

// sorting stuff
let sorting = document.getElementsByName("tasks")[0];
sorting.addEventListener('change', sortBy)

// Open menus
/** iden = the id of the button */
function showBox(iden){
document.getElementById(`${iden}`).classList.toggle('showFilters');
}

/* DISPLAYS FILTERS FOR MOBILE */
let filtersButton = document.getElementById("filter__button");

filtersButton.addEventListener('click', () => {
    showBox("filters");
 });

 /* DISPLAYS FORM FOR MOBILE */
 
 let formButton = document.getElementById("descripForm__button");

 formButton.addEventListener('click', () => {
    showBox("descripForm")
 })

// LocalStorageSaving

window.localStorage.setItem("Tasks", JSON.stringify(Tasks));
let currentTasks = localStorage.getItem("Tasks");
    
remainingTime();

// DisplayRemainingTime
