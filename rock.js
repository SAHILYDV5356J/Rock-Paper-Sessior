let userscore=0;
let compscore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const score=document.querySelector("#user-score");
const scorec=document.querySelector("#comp-score");

const gencompchoice=()=>{
    //rock paper scissor
    let options=["rock","paper","scissor"];  //well known random method
  //  Math.random()    // 0 se 1 ke bich main

  //  Math.random()*3;     //Math.floor se decimal value hatt jati hain
                          //jahan tak value chahiya usme ek no. add karke multiply 

     const randIdx= Math.floor(Math.random() * 3);
     return options[randIdx];
}


const drawgame=()=>{
    console.log("Game is Draw");
    msg.innerText="Match Is Draw. Play Again!";
     msg.style.backgroundColor="#081b31";
}


const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
         userscore++;
        console.log("You Win!");
        msg.innerText=`You Win! ${userchoice.toUpperCase()} beats ${compchoice.toUpperCase()}`;
        msg.style.backgroundColor="green";
        score.innerText=userscore;
       
    }
    else{
        console.log("Computer Win!");
        compscore++;
        msg.innerText=`You Lose! ${compchoice.toUpperCase()} beats ${userchoice.toUpperCase()}`;
         msg.style.backgroundColor="red";
        scorec.innerText=compscore;
    }


}







const playgame=(userchoice)=>{
   // console.log("user choice is",userchoice);

    //computer choise

    const compchoice=gencompchoice();
   // console.log("comp choice",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;

        if(userchoice==="rock"){
            userwin= compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="rock"?true:false;
        }
        else if(userchoice==="scissor"){
             userwin=compchoice==="rock"?false:true;
        }

        showwinner(userwin ,userchoice,compchoice);

    }



}




choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);

    });
});