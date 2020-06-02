'use strict';
function startGame(){
    let score = 0;
    let root = document.getElementById("root");
    let points = document.getElementById("points");
    let newGame = document.getElementById("start");
    let congrts = document.getElementById("congrts");
    const loss = document.getElementById('loss');
    let bombIndexes = Array.from({length:10},()=>Math.floor(Math.random()*82));
    console.log("Bomb",bombIndexes);
    let visited = [];
    let gameOver = false;

    for(let i = 0; i < 9; i++){
        let row = document.createElement("div");
        row.style.height = "40px";
        for(let x = 0; x < 9; x++){
            let currentIndex = i*9+x;
            let cell = document.createElement("div");
            cell.style.height = "40px";
            cell.style.width = "40px";
            cell.innerHTML = "";
            cell.style.display = "inline-block";
            cell.style.border = "1px solid black";
            cell.style.background = "lightblue";
            cell.setAttribute("id",currentIndex);
            cell.addEventListener("click",()=>{
                if(!bombIndexes.includes(currentIndex) && !gameOver){
                    if(!visited.includes(currentIndex)){
                        visited.push(currentIndex);
                        score++;
                        points.innerHTML = "Score: "+score;
                        cell.style.background = "green";
                        if(score >=71){
                            congrts.style.display = "block";
                            newGame.style.display = "block";
                        }
                    }
                }else{
                    for(let j = 0; j < 10; j++){
                        gameOver = true;
                        let bomb = bombIndexes[j];
                        let bombNode = document.getElementById(bomb);
                        bombNode.style.background = "red";
                        bombNode.style.position = "relative";
                        bombNode.style.top = "-24.5px";
                        bombNode.innerHTML = "💣";
                    }
                    if(score < 71){
                        loss.style.display = "block";                    
                    }
                    newGame.style.display = "block";
                }
            });
            row.appendChild(cell);
        }
        root.appendChild(row);
    }
    newGame.addEventListener("click",()=>{
        location.reload();
        // root.innerHTML = "";
        // startGame();
        // score=0;
    })
}
startGame();