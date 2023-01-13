const menuBtn = document.querySelector('.menuBtn');//gebruik querySelector om de knoppen te vinden uit mn html code door te zoeken naar de class name
const menuBtnTwo = document.querySelector('.menuBtnTwo');//gebruik querySelector om de knoppen te vinden uit mn html code door te zoeken naar de class name
const myDiv = document.querySelectorAll('.myLinks');//gebruik querySelectorAll om alle divs te vinden met de class myLink
const wrapper = document.querySelectorAll('.wrapper');//gebruik querySelectorAll om alle divs te vinden met de class wrapper
const nextBtn = document.querySelectorAll('.nextBtn');//gebruik querySelectorAll om alle buttons te vinden met de class nextBtn

wrapper[2].style.display = "none";//ik verander de style css van de derde wrapper
wrapper[1].style.display = "none";//ik verander de style css van de tweede rapper

function testClass(){
   if( myDiv[0].style.display == "block"){
      myDiv[0].style.display = "none"//ik verander de style css van myDiv ofterwijl myLinks
   }
   else{
    myDiv[0].style.display = "block"//ik verander de style css van myDiv ofterwijl myLinks
   }
   // console.log(myDiv[0].style);
}

function leaveRuleWindow(){
    wrapper[0].style.display = "none"//ik verander de style css van de eerste wrapper
    wrapper[1].style.display = "block"//ik verander de style css van de tweede wrapper
}

function leaveUsernameWindow(){
    wrapper[1].style.display = "none"//ik verander de style css van de tweede wrapper
    wrapper[2].style.display = "block"//ik verander de style css van de derde wrapper
}

function setUsername(){
    document.querySelector(".name").innerHTML = document.querySelector('.username').value;//set de username value van de input naar de labals in de html
    document.querySelector(".namePc").innerHTML = document.querySelector('.username').value;//set de username value van de input naar de labals in de html
}

if (menuBtn) {//check of menuBtn bestaat
    menuBtn.addEventListener('click', testClass);//luisterd of er een click event wordt gemaakt en dan execute het de function
}

if (menuBtnTwo) {//check of menuBtnTwo bestaat
    menuBtnTwo.addEventListener('click', testClass);//luisterd of er een click event wordt gemaakt en dan execute het de function
}

if (nextBtn[0]) {//check of nextBtn bestaat
    nextBtn[0].addEventListener('click', leaveRuleWindow);//luisterd of er een click event wordt gemaakt en dan execute het de function
}

if (nextBtn[1]) {//check of nextBtn bestaat
    nextBtn[1].addEventListener('click', leaveUsernameWindow);//luisterd of er een click event wordt gemaakt en dan execute het de function
}

if (nextBtn[1]) {//check of nextBtn bestaat
    nextBtn[1].addEventListener('click', setUsername);//luisterd of er een click event wordt gemaakt en dan execute het de function
}

console.log("DOM.js Loaded!");