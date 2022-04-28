// initialization des variables
let coup=0;
let cpu;
let you_score=0;
let cpu_score=0;
var currentPlayer;
let statu_jeu={
    joueur:"you",
}
let tableau = []
function choix(element){
    let currentPlayer = element;
    let you = currentPlayer;
    console.log("your choise "+you)
    if (currentPlayer === "X"){
        cpu = "O";
    }
    else if (currentPlayer === 'O'){
        cpu = "X";
    }
    console.log("cpu is "+cpu)
    document.querySelector('.layer').style.display='none';
    tableau.push(currentPlayer)
    tableau.push(cpu)
    console.log(tableau)
}
function choiseCase(id) {
    let identifiant= document.getElementById(id);
    if (identifiant.innerHTML!= ""){
        return;
    }
    //cette étape permet d'éviter le chevauchement des pions
    if (statu_jeu.joueur==="you"){
        identifiant.innerHTML= tableau[0];
        statu_jeu.joueur= "cpu";
        coup+=1;
        console.log(statu_jeu.joueur)
        console.log(coup)
    }
    else if (statu_jeu.joueur ==="cpu"){
        identifiant.innerHTML= tableau[1];
        statu_jeu.joueur= "you";
        coup+=1;
        console.log(statu_jeu.joueur)
    }
    if (youWon()== true){
        you_score+=1;
        document.querySelector('.you-score').innerText= you_score;
        document.querySelector('.layer2').style.display='block';
        document.querySelector('.layer2>p').innerText='Congratulation!!! \n you won';
    }
    else if (cpuWon()== true){
        cpu_score+=1;
        document.querySelector('.cpu-score').innerText= cpu_score;
        document.querySelector('.layer2').style.display='block';
        document.querySelector('.layer2>p').innerText="you loose but \n don't give up!!";
    }
    else if (coup == 9){
        if (youWon()!= true && cpuWon()!= true){
            document.querySelector('.layer2').style.display='block';
            document.querySelector('.layer2>p').innerText='Tie game \n hang on!!';
        }
    }
}    

function youWon(){
    let you = tableau[0];
    console.log(tableau[0])
    let A = document.getElementById('item1').innerText;
    let B = document.getElementById('item2').innerText;
    let C = document.getElementById('item3').innerText;
    let D = document.getElementById('item4').innerText;
    let E = document.getElementById('item5').innerText;
    let F = document.getElementById('item6').innerText;
    let G = document.getElementById('item7').innerText;
    let H = document.getElementById('item8').innerText;
    let I = document.getElementById('item9').innerText;
    if (A == you){
        if (B == you && C == you){
            return true;
        }
        if (E=== you && I=== you){
            return true;
        }
        if (D=== you && G=== you){
            return true;
        }
    }
    if (C === you){
        if (E=== you && G=== you){
            return true;
        }
        if (F=== you && I=== you){
            return true;
        }
    }
    if (E === you){
        if (F=== you && D=== you){
            return true;
        }
        if (B=== you && H=== you){
            return true;
        }
    }
    if (H == you){
        if (G=== you && I=== you){
            return true;
        }
    }
    else {
        return false
    }
}
function cpuWon(){
    let A = document.getElementById('item1').innerText;
    let B = document.getElementById('item2').innerText;
    let C = document.getElementById('item3').innerText;
    let D = document.getElementById('item4').innerText;
    let E = document.getElementById('item5').innerText;
    let F = document.getElementById('item6').innerText;
    let G = document.getElementById('item7').innerText;
    let H = document.getElementById('item8').innerText;
    let I = document.getElementById('item9').innerText;
    if (A === cpu){
        if (B=== cpu && C=== cpu){
            return true;
        }
        if (D=== cpu && I=== cpu){
            return true;
        }
        if (D=== cpu && G=== cpu){
            return true;
        }
    }
    if (C === cpu){
        if (E=== cpu && G=== cpu){
            return true;
        }
        if (F=== cpu && I=== cpu){
            return true;
        }
    }
    if (E === cpu){
        if (F=== cpu && D=== cpu){
            return true;
        }
        if (B=== cpu && H=== cpu){
            return true;
        }
    }
    if (H == cpu){
        if (G=== cpu && I=== cpu){
            return true;
        }
    }
    else{
        return false
    }
}

function reset() {
    item1.textContent="";
    item2.textContent="";
    item3.textContent="";
    item4.textContent="";
    item5.textContent="";
    item6.textContent="";
    item7.textContent="";
    item8.textContent="";
    item9.textContent="";
    coup = 0;
    document.querySelector('.you-score').innerText= 0;
    document.querySelector('.cpu-score').innerText= 0;
    cpu_score = 0;
    you_score = 0;
    tableau=[]
    statu_jeu.joueur="you"
    document.querySelector('.layer').style.display='block';
    // item1.className="grid-item",
}
function playagain(){
    item1.textContent="";
    item2.textContent="";
    item3.textContent="";
    item4.textContent="";
    item5.textContent="";
    item6.textContent="";
    item7.textContent="";
    item8.textContent="";
    item9.textContent="";
    coup = 0;
    document.querySelector('.layer2').style.display='none';
    document.querySelector('.layer').style.display='block';
    statu_jeu.joueur="you"
    choix()
}
