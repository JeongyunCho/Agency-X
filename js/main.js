 //variables
 let clickImg = document.querySelectorAll(".clickme"),
     imageBox = document.querySelector("#imgBox"),
     close = document.querySelector("#close"),
     lightBox = document.querySelector("#lightbox"),
     nav = document.querySelector("#mainNav"),
     name = document.querySelector("#name"),
     desc = document.querySelector("#desc"),
     leftBtn = document.querySelector("#left"),
     rightBtn = document.querySelector("#right");
     
 const arrName = ["Cho","Andrino"];
 const arrText = ["Kim Hanbok Project","First Year Integrated Project","Sci-Fi Fan","The Dark Mine","Small World"];
 const imgArr = ["cho1_l","cho2_l","andrino1_l","andrino2_l","andrino3_l"];
 let idx=0;

//functions
//imageSwap changes image in lightbox
 imageSwap=(e)=>{
   lightBox.className = "open";
  nav.style.visibility='hidden';
  imageBox.src = e.target.src;
  nameSwap();
  textSwap();
 };


  nameSwap=()=>{
    if (imageBox.src.match("cho")){
      idx=0;
    }else{
      idx=1;
    }
    name.innerText=arrName[idx];
  }
  textSwap=()=>{
    if (imageBox.src.match("cho1")){
      idx=0;
    }
    if (imageBox.src.match("cho2")){
      idx=1;
    }
    if (imageBox.src.match("andrino1")){
      idx=2;
    }
    if (imageBox.src.match("andrino2")){
      idx=3;
    }
    if (imageBox.src.match("andrino3")){
      idx=4;
    }
    
    desc.innerText=arrText[idx];  
}
//button function change Pic
  next=()=>{
  idx++;
  if(idx==5)idx=0;
  imageBox.src = "images/"+imgArr[idx]+".png";
  nameSwap();
  textSwap();
}

prev=()=>{
  idx--;
  if(idx==-1)idx=4;
  imageBox.src = "images/"+imgArr[idx]+".png";
  nameSwap();
  textSwap();
}


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
leftBtn.addEventListener("click",prev,false);
rightBtn.addEventListener("click",next,false);

//--------------------------------------------------------



