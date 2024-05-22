let imageElement = document.getElementById("image");
let originalImageWidth = "200px";
imageElementt.style.width = originalImageWidth;

let warningmsgElement = document.getElementById("warningmsg ");
let imagewidthElement = document.getElementById("imgWidth");
imagewidthElement.textContent = originalImageWidth;


let minwidth = 100;
let defaultwidth = 200;
let maxwidth = 300;

let minwidthwarningMessage = "Can't Visible.Increase the size of the image";
let maxwidthwarningMessage = "Too big, Decresease the size of the image";

function btndecrement(){
    if (defaultwidth <= minwidth){
        warningmsgElement.textContent = minwidthwarningMessage;

    }else{
        warningmsgElement.textContent = "";
        defaultwidth = defaultwidth;
        originalImageWidth = defaultwidth + "px";
        imageElement.style.width = originalImageWidth;
        imagewidthElement.textContent = originalImageWidth;  
        
    }
}

function btnincrement(){
    if (defaultwidth >= maxwidth){
        warningmsgElement.textContent = maxwidthwarningMessage;

    }else{
        warningmsgElement.textContent = "";
        defaultwidth = defaultwidth;
        originalImageWidth = defaultwidth + "px";
        imageElement.style.width = originalImageWidth;
        imagewidthElement.textContent = originalImageWidth;  
        
    }
}