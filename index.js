
function getVal() {
    const val = document.querySelector('input').value;
    
    document.getElementById("try").innerHTML = val
  }
let counter = 0;
function math() {
    counter += 1 ;
    document.getElementById("math").innerHTML = counter;
}
function count() {
    counter += 100 ;
    document.getElementById("math").innerHTML = counter;
}
function countMil() {
    counter += 1000000 ;
    document.getElementById("math").innerHTML = counter;
}

function reset() {
    counter = 0 ;
    document.getElementById("math").innerHTML = counter;
}
