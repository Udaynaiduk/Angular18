input=document.body.getElementsByTagName('input')[0];
result=document.getElementById('result');
input.addEventListener('change',()=>{
    console.log("Input value changed to: " + input.value);
    checkEligibility();
});

checkEligibility=()=>{
    if(!input.value){
        result.innerText=" "
        result.innerText="Please enter your age.";
        return;
    }
if(input.value>=18){
    result.innerText=" "
    result.innerText="You are eligible to vote.";
    
}
else{
    result.innerText=" "
    result.innerText="You are not eligible to vote.";
}
}

Rock=document.getElementById('Rock');
Paper=document.getElementById('Paper');
Scissors=document.getElementById('Scissors');
gameresult=document.getElementById('gameresult');
let roles=["Rock","Paper","Scissors"];

computerscore=document.getElementById('computerscore');
userscore=document.getElementById('userscore');
cscore=0;
uscore=0;
    let userchoice;
    let computerchoice;
    Rock.addEventListener('click',()=>{
        userchoice="Rock";
        computerchoice=roles[Math.floor(Math.random()*3)];
        determineWinner(userchoice,computerchoice);
    })
    Paper.addEventListener('click',()=>{
        userchoice="Paper";
        computerchoice=roles[Math.floor(Math.random()*3)];
        determineWinner(userchoice,computerchoice);
    })
    Scissors.addEventListener('click',()=>{
        userchoice="Scissors";
        computerchoice=roles[Math.floor(Math.random()*3)];
        determineWinner(userchoice,computerchoice);
    })
    
   function determineWinner(user,computerchoice){
    console.log(Math.floor(Math.random()*3));
    if(user===computerchoice){
        gameresult.innerText="It's a tie! Both chose " + user;

    }
    else if((user==="Rock" && computerchoice==="Scissors") ||
            (user==="Paper" && computerchoice==="Rock") ||
            (user==="Scissors" && computerchoice==="Paper")){
                gameresult.innerText="You win! " + user + " beats " + computerchoice;
                uscore++;
                userscore.innerText=uscore;
            }
            else{
                gameresult.innerText="You lose! " + computerchoice + " beats " + user;
                cscore++;
                computerscore.innerText=cscore;
            }
        
        
        }

        //ternary operator example
        var i=20>100? "20 is greater":"100 is greater";
        console.log(i);

        var and=1 && 'kiran';
        console.log(and);
        and=0 && 'kiran';
        console.log(and);
        and='uday' && 'kiran';
        console.log(and);

        var or=1 || 'kiran';
        console.log(or);
        or=0 || 'kiran';
        console.log(or);