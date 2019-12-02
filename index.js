window.addEventListener("load", () => {
     const sounds = document.querySelectorAll(".sound");
     const pads = document.querySelectorAll(".pads div ");
     const visual =document .querySelector(".visual");
     const colors=[
       " #60d394",
        "#60d",
        "#dc6060",
        "#d3d160",
        "rgb(128, 17, 85)",
        "#64dc60 "
     ]

     //let s get going with the sounds here 
     console.log(sounds);
     
     pads.forEach((pad , index) => {
         pad.addEventListener("click", function(){
             sounds[index].currentTime =0;
             sounds[index].play();
             createBubbles(index);
         });

         
     });
//create function that make bublse 
const createBubbles = index => {
    const bubble =document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor=colors[index];
    bubble.style.animation="jump 1s ease";
    bubble.addEventListener("animationend",function(){
        visual.removeChild(this);

    })


}
});
//console.log(sounds);