$(document).foundation()

 //variables
 let clickImg = document.querySelectorAll(".clickme");
 let imageBox = document.querySelector("#imgBox");
 let close = document.querySelector("#close");
 let lightBox = document.querySelector("#lightbox");
 let nav = document.querySelector("#mainNav");

//functions
//imageSwap changes image in lightbox
 imageSwap=(e)=>{
   lightBox.className = "open";
  nav.style.visibility='hidden';
  imageBox.src = e.target.src;

 };

 closeBtn=()=>{
   lightBox.className = "";
   nav.style.visibility='visible';
 };

 closeClick=(e)=>{
  // console.log(e.target);
if (e.target.id == "lightbox_content") {
lightBox.className = "";
nav.style.visibility='visible';
}
};

//eventListeners
for(let i=0; i<clickImg.length; i++){
 clickImg[i].addEventListener("click",imageSwap,false);
}
close.addEventListener("click",closeBtn,false);
lightBox.addEventListener("click",closeClick,false);
