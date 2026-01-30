
let leta=15;

console.log(vara)
var vara=25;
console.log(vara)
let val=0;
number=document.getElementById('number');
incliclk=document.body.getElementsByTagName('button')[1];
dcliclk=document.body.getElementsByTagName('button')[2];
incliclk.addEventListener('click',()=>{
    val++;
    number.innerText=val;
})
dcliclk.addEventListener('click',()=>{
    val--;
    number.innerText=val;
})
const conat=30;