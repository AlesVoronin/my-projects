const iframe_wrapper = document.querySelector(".other_cams_slider");
let main_video = document.querySelector(".video_frame iframe");
// let first_src = main_video.getAttribute("src");
let first_src = "";
let second_src = "";




function replace_video(event){
    if (event.target.classList.contains("watch-text") || event.target.classList.contains("watch")){
        let second_video = event.target.parentElement.parentElement.parentElement.parentElement.querySelector("iframe");
        first_src = main_video.getAttribute("src");
        second_src = second_video.getAttribute("src");

        second_video.setAttribute("src", first_src);
        main_video.setAttribute("src", second_src);
    }
}




iframe_wrapper.addEventListener("mousedown", replace_video);
