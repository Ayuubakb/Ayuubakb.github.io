let nav=document.getElementById("navigation");
let sec1=document.getElementById("sec1");
let sec2=document.getElementById("b2");
let sec3=document.getElementById("b3")

Animation=[
    {transform:'translateX(-100%)',opacity:'0'},
    {transform:'translateX(0)',opacity:'1'}
]
time={
    duration:1000,
    iterations:1
}
Animation2=[
    {transform:'translateX(100%)',opacity:'0'},
    {transform:'translateX(0)',opacity:'1'}
]
Animation3=[
    {transform:'translateY(-100%)',opacity:'0'},
    {transform:'translateY(0)',opacity:'1'}
]

let flag=false;
let flag2=false;
let flag3=false;
window.addEventListener("load",
()=>{
        console.log("o"+window.scrollY);
        if(flag == false){
            sec1.querySelector('.textBox1').animate(Animation,time);
            sec1.querySelector('.imgs').animate(Animation2,time);
            setTimeout(()=>{
                sec1.querySelector('.textBox1').style.opacity='1'
                sec1.querySelector('.imgs').style.opacity='1'
            },900)
            flag=true
        }
})
document.addEventListener("scroll",
()=>{
    if(window.scrollY == 0){
        nav.style.boxShadow="none";
    }
    else{
        nav.style.boxShadow="0.5px 0.5px 5px black";
    }
    if(document.onload){
        console.log("o"+window.scrollY);
        if(flag == false){
            sec1.querySelector('.textBox1').animate(Animation,time);
            sec1.querySelector('.imgs').animate(Animation2,time);
            setTimeout(()=>{
                sec1.querySelector('.textBox1').style.opacity='1'
                sec1.querySelector('.imgs').style.opacity='1'
            },900)
            flag=true
        }
    }
   /* else{
        flag=false;
        sec1.querySelector('.textBox1').style.opacity='0'
        sec1.querySelector('.imgs').style.opacity='0'
    }*/
    if(window.scrollY < 1000 && window.scrollY >= (sec2.offsetTop -250)){
        if(flag2 == false){
            sec2.querySelector('.textBox1').animate(Animation,time);
            sec2.querySelector('.imgs').animate(Animation2,time);
            setTimeout(()=>{
                sec2.querySelector('.textBox1').style.opacity='1'
                sec2.querySelector('.imgs').style.opacity='1'
            },900)
            flag2=true
        }
    }
    /*else{
        flag2=false;
        sec2.querySelector('.textBox1').style.opacity='0'
        sec2.querySelector('.imgs').style.opacity='0'
    }*/
    if(window.scrollY < 2000 && window.scrollY >= (sec3.offsetTop-250)){
        if(flag3 == false){
            sec3.querySelector('.swipContainer').animate(Animation3,time);
            setTimeout(()=>{
                sec3.querySelector('.swipContainer').style.opacity='1'
            },900)
            flag3=true
        }
    }
    /*else{
        flag3=false;
        sec2.querySelector('.swipContainer').style.opacity='0'
    }*/
}
)
let rt=document.getElementById("right");
let lt=document.getElementById("left");
let fd=document.querySelectorAll(".food");
let leg=fd.length;
let currSlide=0;

let media1=window.matchMedia("(max-width:1340px)");
let media2=window.matchMedia("(max-width:900px)");
let media3=window.matchMedia("(max-width:325px)");

rt.addEventListener("click",
()=>{
    if(media2.matches){
        console.log("media2");
        if(currSlide < leg-1){
            currSlide++;
            if(media3.matches){
                fd.forEach((food) =>{food.style.transform='translate(-'+currSlide*290+'px)'});
            }
            else{
                fd.forEach((food) =>{food.style.transform='translate(-'+currSlide*350+'px)'});
            }
        }else{
            fd.forEach((food) =>{food.style.transform='translate('+(currSlide-5)*350+'px)'});
            currSlide=0;
        }
    }
    else if(media1.matches){
        console.log("media1");
        if(currSlide < leg-2){
            currSlide++;
            fd.forEach((food) =>{food.style.transform='translate(-'+currSlide*350+'px)'});
        }else{
            fd.forEach((food) =>{food.style.transform='translate('+(currSlide-4)*350+'px)'});
            currSlide=0;
        }
    }
    else{
        if(currSlide < leg-3){
            currSlide++;
            fd.forEach((food) =>{food.style.transform='translate(-'+currSlide*350+'px)'});
        }else{
            fd.forEach((food) =>{food.style.transform='translate('+(currSlide-3)*350+'px)'});
            currSlide=0;
        }
    }
})
lt.addEventListener("click",
()=>{
    if(media2.matches){
        if(currSlide > 0){
            currSlide--;
            if(media3.matches){
                fd.forEach((food) =>{food.style.transform='translate('+(-currSlide)*290+'px)'});
            }
            else{
                fd.forEach((food) =>{food.style.transform='translate('+(-currSlide)*350+'px)'});
            }
        }else{
            if(media3.matches){
                fd.forEach((food) =>{food.style.transform='translate(-'+(currSlide+5)*290+'px)'});
            }else{
                fd.forEach((food) =>{food.style.transform='translate(-'+(currSlide+5)*350+'px)'});
            }
            currSlide=5;
        }
    }
    else if(media1.matches){
        if(currSlide > 0){
            currSlide--;
            fd.forEach((food) =>{food.style.transform='translate('+(-currSlide)*350+'px)'});
        }else{
            fd.forEach((food) =>{food.style.transform='translate(-'+(currSlide+4)*350+'px)'});
            currSlide=4;
        }
    }
    else{
        if(currSlide > 0){
            currSlide--;
            fd.forEach((food) =>{food.style.transform='translate('+(-currSlide)*350+'px)'});
        }else{
            fd.forEach((food) =>{food.style.transform='translate(-'+(currSlide+3)*350+'px)'});
            currSlide=3;
        }
    }
})

let close=document.getElementById("cl");
let opn=document.querySelector(".menubtn");
close.addEventListener("click",
()=>{
    document.querySelector(".menu").style.minWidth='45%';
    document.querySelector(".menu").style.width='45%';
    document.getElementById("logo").style.display="block";
    document.getElementById("items").style.display="none";
})
opn.addEventListener("click",
()=>{
    document.querySelector(".menu").style.minWidth="100vw";
    document.getElementById("logo").style.display="none";
    document.getElementById("items").style.display="block";
})