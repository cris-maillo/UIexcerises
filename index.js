let menuIcon = document.getElementById("hamburger");
let dropDown = document.getElementById("dropdown");
let main = document.getElementById("dropDownExercise");

menuIcon.addEventListener("click", function(){
    dropDown.classList.toggle("hidden");
    main.classList.toggle("visible");
});

function newTab(name){
    console.log(name)
}