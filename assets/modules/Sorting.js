// Sorting
export function sortBy(ToSort){

    let alpha = document.querySelector('input[type="radio"]:checked').value;

    if (alpha == "remainingTime"){
    let TASKS = ToSort.sort((a,b) => a.delay - b.delay);
    } else if (alpha == "taskName"){
    let TASKS = ToSort.sort((a,b) => a.name > b.name);
    }
}
    