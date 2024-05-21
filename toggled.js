let puppyImageElement = document.getElementById("puppyimage")
let likeIconElement = document.getElementById("likeicon")
let likebuttonElement = document.getElementById("likebutton")
let IsimgLiked = false
function likebutton(){
    if (IsimgLiked === false){
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png"
        likeIconElement.style.color = "#0967d2"
        likebuttonElement.style.backgroundColor = "#0967d2"
        likebuttonElement.style.color = "#ffffff"
        IsimgLiked = true
    }
    else{
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png"
        likeIconElement.style.color = "#cbd2d9"
        likebuttonElement.style.backgroundColor = "#cbd2d9"
        likebuttonElement.style.color = "#9aa5b1"
        IsimgLiked = false

    }
 }