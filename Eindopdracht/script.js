let menuKnop= document.querySelector(".nav__logo");
menuKnop.addEventListener("click", aftrap);
let menuKnopStatus= false;
    function aftrap(){
    let getMenu=document.querySelector(".menu");
    let getMenuA=document.querySelectorAll(".menu li a");

    if (menuKnopStatus===false){
        getMenu.style.visibility= "visible";
        
        let lengthMenuA= getMenuA.length;
        for (let i=0; i<lengthMenuA; i++){
            getMenuA[i].style.opacity="1";
        }
        menuKnopStatus=true;
        }
    else if(menuKnopStatus===true){
       
        let lengthMenuA= getMenuA.length;
        for (let i=0; i<lengthMenuA; i++){
            getMenuA[i].style.opacity="0";
        }
        getMenu.style.visibility = "hidden";
        menuKnopStatus=false;
    }
};

let getKnopGrey= document.querySelector(".menu__grey");
getKnopGrey.addEventListener("click", aftrapGrey);
let knopGreyStatus=false;

function aftrapGrey(){
    if(knopGreyStatus === false){
    let getBody=document.querySelector("body");
    getBody.style.backgroundColor ="grey";
    aftrap(true);
    }
};

let getKnopRed= document.querySelector(".menu__red");
getKnopRed.addEventListener("click", aftrapRed);
let knopRedStatus=false;

function aftrapRed(){
    if(knopRedStatus === false){
    let getBody=document.querySelector("body");
    getBody.style.backgroundColor ="red";
    aftrap(true);
    }
};

let getKnopPurple= document.querySelector(".menu__purple");
getKnopPurple.addEventListener("click", aftrapPurple);
let knopPurpleStatus=false;

function aftrapPurple(){
    if(knopPurpleStatus === false){
    let getBody=document.querySelector("body");
    getBody.style.backgroundColor ="purple";
    aftrap(true);
    }
};

let getKnopOrange= document.querySelector(".menu__orange");
getKnopOrange.addEventListener("click", aftrapOrange);
let knopOrangeStatus=false;

function aftrapOrange(){
    if(knopOrangeStatus === false){
    let getBody=document.querySelector("body");
    getBody.style.backgroundColor ="orange";
    aftrap(true);
    }
};


let getKnopGreen= document.querySelector(".menu__green");
getKnopGreen.addEventListener("click", aftrapGreen);
let knopGreenStatus=false;
function aftrapGreen(){
    if(knopOrangeStatus === false){
    let getBody=document.querySelector("body");
    getBody.style.backgroundColor ="green";
    aftrap(true);
    }
};