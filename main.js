function handlemobilemenu(){
 
var mobilemenudiv = document.getElementById("mobilemenu");  
 if(mobilemenudiv.classList.contains('hidden')){
    mobilemenudiv.classList.remove('hidden');
 }else{
    mobilemenudiv.classList.add('hidden');
 }
}




function sendmessage() {

var  phone_no = "+919384705038"
var url = "https://wa.me/919384705038?"
 
 window.open(url, '_blank').focus();

 
} 


/* slider */  

/* let slidercontainer = document.getElementById('slidercontainer');
let sliderul = document.getElementById('sliderul');
let cardsarray  = sliderul.getElementsByTagName("li");
let elementstoshow =3;
let slidercontainerwidth = slidercontainer.clientWidth;
let cardwidth = slidercontainerwidth/elementstoshow;
sliderul.style.width = cardsarray.length*cardwidth+'px';
sliderul.style.transition ='margin';
sliderul.style.transitionDuration = 100s;

for (let index = 0; index < cardsarray.length; index++) {
   const element = cardsarray[index];
   element.style.width = cardwidth+'px'
   
}

function preslider(){
   if((+sliderul.style.marginLeft.slice(0,-2)) != - cardwidth*(cardsarray.length-elementstoshow))
   sliderul.style.marginLeft =  ((+sliderul.style.marginLeft.slice(0,-2))-cardwidth)+'px'
}
function nexslider(){
   if(+(sliderul.style.marginLeft.slice(0,-2)) !=0){
      sliderul.style.marginLeft =  ((+sliderul.style.marginLeft.slice(0,-2))+cardwidth)+'px'
   }
 
} */




