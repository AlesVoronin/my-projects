const spoiler_btn = document.querySelectorAll(".info_btn");

function spoiler_click (event){
    let title = event.target.parentElement;
    if (title.classList.contains("accordion_title")){
        let text = event.target.parentElement.parentElement.querySelector(".content_text");
        if (title.classList.contains("spoiler_active")){
            text.style.display = "none";
            title.classList.remove("spoiler_active");
            title.querySelector(".text_btn_accordeon").style.color = "#080029";
            title.querySelector(".blue_plus").style.borderColor = "#080029";
            title.querySelector(".blue_plus").classList.add("active_plus");
            event.target.parentElement.parentElement.style.borderBottom = "1px solid #D3D3D3";
        }
        else {
            text.style.display = "block";
            title.classList.add("spoiler_active");
            title.querySelector(".text_btn_accordeon").style.color = "#609FFF";
            title.querySelector(".blue_plus").style.borderColor = "#609FFF";
            title.querySelector(".blue_plus").classList.remove("active_plus");
            event.target.parentElement.parentElement.style.borderBottom = "1px solid #609FFF";
        }
    }



    // console.log(event.target)
    // console.log(event.target.parentElement.querySelector(".accordion_title"));

}

spoiler_btn.forEach(btn => btn.addEventListener("mousedown", spoiler_click));
