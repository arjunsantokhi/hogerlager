//@arjun santokhi
/*rules:
De computer krijgt een nummer en de speler moet raden of zijn nummer HOGER of LAGER is dan de nummer van de computer.
Je krijgt standaard 100 credits, als je wint krijg je 10 credits erbij maar als je verliest dan verlies je 30 credits.
*/

//VARS
let playerNum;
let computerNum;
let credits = 100;
const maxNum = 100;

//button
const playGameBtn = document.querySelector('.playBtn');//gebruik querySelector om de knoppen te vinden uit mn html code door te zoeken naar de class name
const startGameBtn = document.querySelector('.startBtn');//gebruik querySelector om de knoppen te vinden uit mn html code door te zoeken naar de class name
const restartGameBtn = document.querySelector('.restartBtn');//gebruik querySelector om de knoppen te vinden uit mn html code door te zoeken naar de class name

//default settings for buttons
restartGameBtn.style.display = "none";//ik verander de style css van restartBtn
startGameBtn.style.display = "inline";//ik verander de style css van startBtn
playGameBtn.style.display = "none";//ik verander de style css van playBtn

function generateNumbers(num){
    return Math.floor(Math.random() * num) + 1;//ik generate hier een random nummer die door math.floor naar benede afrond
}

function restartGame(){
    playerNum = 0;//ik verander de gegenereerde nummer terug naar 0
    computerNum = 0;//ik verander de gegenereerde nummer terug naar 0

    document.querySelector(".status").innerHTML = "";//hiermee zet ik de text naar niks
    document.querySelector(".playerNumber").innerHTML = "Player: " + playerNum;//ik zet de nieuwe playernum in html
    document.querySelector(".computerNumber").innerHTML = "Computer: " + computerNum;//ik zet de nieuwe computernum in html

    restartGameBtn.style.display = "none";//ik verander de style css van restartBtn
    startGameBtn.style.display = "inline";//ik verander de style css van startBtn
    playGameBtn.style.display = "none";//ik verander de style css van playBtn
}

function playGame() {
    let radioHigher = document.querySelector('input[name="options"]:checked');//check of de radio buttons zijn gechecked of niet.
    
    if(document.querySelector(".computerNumber").innerHTML != "Computer: 0")//checkt of de game is gestart door de computer nummer te checken want de nummers die worden gegenerate kan geen 0 zijn.
    {
        if(credits <= 0)//checkt of ik credits over heb zo niet dan krijg ik een alert
        {
            credits = 0;//dit heb ik gedaan voor als ik bijv in de min ga dat het gewoon op 0 blijft
            alert("Je hebt geen Credits! GAME OVER!")
        }
        else{
            if(radioHigher == null) {//checkt of ik hoger of lager hebt gekozen en zo niet dan krijg ik een alert
                alert("Kies hoger of lager");
            }
            else{
                playerNum = generateNumbers(maxNum); //generate een random getal voor de player

                document.querySelector(".playerNumber").innerHTML = "Player: " + playerNum;
                document.querySelector(".computerNumber").innerHTML = "Computer: " + computerNum;
    
                if(playerNum >= computerNum && radioHigher.value == "Hoger") {
                    document.querySelector(".status").innerHTML = "Player won!";//dit zet de status in html
                    credits += 10//doet er 10 credits bij als je hebt gewonnen
                }
                else if(playerNum <= computerNum && radioHigher.value == "Lager") {
                    document.querySelector(".status").innerHTML = "Player won!"; //dit zet de status in html
                    credits += 10//doet er 10 credits bij als je hebt gewonnen
                }
                else {
                    document.querySelector(".status").innerHTML = "Player lost!"; //dit zet de status in html
                    credits -= 30;//haalt 30 credits weg als je hebt verloren
                }
            
                document.querySelector(".credits").innerHTML = "Credits: " + credits;//dit zet de credits in html
                document.querySelector(".creditsTwo").innerHTML = "Credits: " + credits;//dit zet de credits in html

                restartGameBtn.style.display = "inline";//ik verander de style css van restartBtn
                startGameBtn.style.display = "none";//ik verander de style css van startBtn
                playGameBtn.style.display = "none";//ik verander de style css van playBtn
            }
        }
    }
    else{
        alert("Click start to start the game!");
    }
}

function startGame(){
    if(credits <= 0)//checkt of ik credits over heb zo niet dan krijg ik een alert
    {
        credits = 0;//dit heb ik gedaan voor als ik bijv in de min ga dat het gewoon op 0 blijft
        alert("Je hebt geen Credits!")
    }
    else{
        computerNum = generateNumbers(maxNum);//dit generate een getal voor de computer
        document.querySelector(".computerNumber").innerHTML = "Computer: " + computerNum;//dit zet de computer nummer in html

        startGameBtn.style.display = "none";//ik verander de style css van startBtn
        playGameBtn.style.display = "inline";//ik verander de style css van playBtn
    }
}

//dit zet alle values in html
document.querySelector(".playerNumber").innerHTML = "Player: " + 0;
document.querySelector(".computerNumber").innerHTML = "Computer: " + 0;
document.querySelector(".credits").innerHTML = "Credits: " + credits;
document.querySelector(".creditsTwo").innerHTML = "Credits: " + credits;

if(playGameBtn){//check of playGameBtn bestaat
    playGameBtn.addEventListener('click', playGame);//luisterd of er een click event wordt gemaakt en dan execute het de function
}

if(startGameBtn)//check of startGameBtn bestaat
{
  startGameBtn.addEventListener('click', startGame);//luisterd of er een click event wordt gemaakt en dan execute het de function
}

if(restartGameBtn){//check of restartGameBtn bestaat
    restartGameBtn.addEventListener('click', restartGame);//luisterd of er een click event wordt gemaakt en dan execute het de function
}

console.log("Main.js Loaded!");