console.log("main loaded");
//hier neem ik alle html classes op
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 
let count = 0; 
//hier zjn de winCondities
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
//alle speelvakken worden opnieuw leeg en klikbaar gemaakt
function resetGame (){
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};
//schakelt het vakje uit en dan vervolgens volgende is aan de beurt 
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (turnO) {
      //playerO
      boxes[i].innerText = "O";
      turnO = false;
    } else {
      //playerX
      boxes[i].innerText = "X";
      turnO = true;
    }
    boxes[i].disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
}

//9 zetten en nogsteeds geen winnaar dan wordt een bericht getoond 
function gameDraw() {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
//hier wordt alle vakjes onklikbaar gemaakt 
function disableBoxes () {
  for (let box of boxes) {
    box.disabled = true;
  }
};
//alle vakjes worden leeg en weer klikbaar gemaakt 
function enableBoxes() {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

//bijv 3 O's op een rij dan wordt er een bericht getoond met wie heeft gewonnen
function showWinner (winner) {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
//controleert alle winnende combinaties in winPatronen, de boxes vergelijken met de mogelijke winnende combinaties
function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
//hier wordt gecontroleerd of alle drie de vakjes in het patroon gevuld zijn,kan geen winner opleveren als 1 vak leeg is
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);