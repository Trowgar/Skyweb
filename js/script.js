let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("not-active");
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("hidden");
        this.nextElementSibling.classList.toggle("show");
  });
}


let btn = document.querySelector(".burger-menu");
let menu = document.querySelector(".menu-list");
let content = document.querySelector(".content");


btn.addEventListener("click", function(){
    menu.classList.toggle("menu-active");
    content.classList.toggle("navbar-active");
});