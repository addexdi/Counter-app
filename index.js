let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count
    
    
}

function save() {
  let myCount = count + " - "
    saveEL.textContent += myCount
    countEl.textContent = 0
    count = 0
}





