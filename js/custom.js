var navul = document.querySelector(".navigation ul li");
var button = document.querySelector(".list-btn");

let openMenu= false;

button.addEventListener("click", function () {
    if(openMenu===false) {
        navul.style.right = "0px";
        openMenu = true;
    }
        else{
            navul.style.right = "-400px";
            openMenu = false;

        }

        
        
   




}

);