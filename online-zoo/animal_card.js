const map_marker = document.querySelectorAll(".map_marker");
const map_active_card = document.querySelector(".map_active_card");

let animal_aray = new Array();
class Animal_data{
    id;
    name;
    img_src;
    text;

    constructor(id, name, img_src, text, link) {
        this.id = id;
        this.name = name;
        this.img_src = img_src;
        this.text = text;
        this.link = link;
    }
}

animal_aray.push(new Animal_data("marker_eagle", "Eagle", 'assets/images/image_9.png', "The broadcast is from an island near Los Angeles. Watch their real life.", "pages/zoos/eagle/eagle.html"));
animal_aray.push(new Animal_data("marker_panda", "Panda", 'assets/images/image_12.jpg', "The broadcast from the central zoo of China. See their real life.", "pages/zoos/panda/panda.html"));
animal_aray.push(new Animal_data("marker_alligator", "Alligator", 'assets/images/image_11.jpg', "The broadcast is from Africa. See their real life.", "pages/zoos/crocodile/crocodile.html"));
animal_aray.push(new Animal_data("marker_gorilla", "Gorilla", 'assets/images/image_10.png', "The broadcast is from an Republic of Congo. Watch their real life.", "pages/zoos/gorilla/gorilla.html"));




function select_marker(event){
    if (event.target.classList.contains("map_marker_active")){
        event.target.classList.remove("map_marker_active");
    }
    else {
        map_marker.forEach(marker => marker.classList.remove("map_marker_active"));
        event.target.classList.add("map_marker_active");
        for (let i=0; i < animal_aray.length; i++){
            if (animal_aray[i].id === event.target.id){
                // console.log(animal_aray[i]);
                map_active_card.querySelector(".active_card_image").style.backgroundImage = "url(" + animal_aray[i].img_src + ")";
                map_active_card.querySelector(".span_text").innerHTML = animal_aray[i].name;
                map_active_card.querySelector(".content_text").innerHTML = animal_aray[i].text;
                map_active_card.querySelector("a").setAttribute("href", animal_aray[i].link);
            }
        }
    }
}

map_marker.forEach(marker => marker.addEventListener('click', select_marker))
