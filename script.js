let random=Math.floor(Math.random()*20)+1;
let guess;
var score=20;
let highscore=0;
// document.querySelector(".guess").innerHTML="";
// document.querySelector(".score").innerHTML='';
// document.querySelector(".highscore").innerHTML='';
// document.querySelector(".check").innerHTML='';
// document.querySelector(".number").innerHTML='';
// document.querySelector(".number").innerHTML='';

document.querySelector(".number").value='';


document.querySelector(".highscore").innerHTML=highscore;

document.querySelector(".again").addEventListener("click",function(){
    score=20;
    document.querySelector(".number").value='';
    document.querySelector(".score").innerHTML=score;
    random=Math.floor(Math.random()*20)+1;

    document.querySelector('body').style.backgroundColor="white";

})



document.querySelector(".check").addEventListener("click",function(){
  guess= document.querySelector(".number").value ;
   


if(random>guess){
    document.querySelector(".guess").innerHTML="Comment : Too low";  
    score--;
    document.querySelector(".score").innerHTML=score;
 


}
else if(random<guess){
    document.querySelector(".guess").innerHTML="Comment :Too high"; 
    score--;
    document.querySelector(".score").innerHTML=score;
 

    

}

else if(random=guess){
    document.querySelector('body').style.backgroundColor="green";
    document.querySelector(".guess").innerHTML="Comment : You got it";  
    score--;
    document.querySelector(".score").innerHTML=score;
    check();

}


})

function check(){


    if(score>highscore){
        highscore=score;
        document.querySelector(".highscore").innerHTML=highscore;
    }
}
