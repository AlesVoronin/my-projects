const burger_button = document.querySelector(".burger_menu");
const slide_menu = document.getElementById("slide_menu")
const navigation_menu = document.getElementsByClassName("navigation_menu");



function burger_active(){
    if(burger_button.classList.contains("act") == true){
        burger_button.classList.remove("act");
        slide_menu.style.transform = "translateY(-90px)";
    }
    else{
        burger_button.classList.add("act");
        slide_menu.style.transform = "translateY(-650px)";
    }
}


burger_button.addEventListener("mousedown", burger_active);
