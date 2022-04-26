// initialization des variables
let coup=0;
let case_libre=[null,null,null,null,null,null,null,null,null]
let you="x";
let cpu="O";
let you_score=0;
let cpu_score=0;
var currentPlayer= you;
    // Récupération des cases à clicker
    // const items = Array.from(document.getElementsByClassName('grid-item'));
    // console.log(items)

function choiseCase() {
    const position=event.target.id;
    if (case_libre[position]==null){
        //cette étape permet d'éviter le chevauchement des pions
        case_libre[position] = currentPlayer;
        //ecriture sur html
        event.target.innerText = currentPlayer;
        // Mise en place des tours des joueurs dont you est le premier
        if (currentPlayer==you){
            currentPlayer = cpu;
        }
        else if (currentPlayer == cpu){
            currentPlayer = you;
        }
    }
    else if (case_libre[position!=null]){
        continu
    }
}
function won(){
    if (case_libre[0] === currentPlayer){
        if (case_libre[1]=== currentPlayer && case_libre[2]=== currentPlayer){
            return true;
        }
        if (case_libre[4]=== currentPlayer && case_libre[8]=== currentPlayer){
            return true;
        }
        if (case_libre[3]=== currentPlayer && case_libre[6]=== currentPlayer){
            return true;
        }
    }
    if (case_libre[2] === currentPlayer){
        if (case_libre[4]=== currentPlayer && case_libre[6]=== currentPlayer){
            return true;
        }
        if (case_libre[5]=== currentPlayer && case_libre[8]=== currentPlayer){
            return true;
        }
    }
    if (case_libre[4] === currentPlayer){
        if (case_libre[5]=== currentPlayer && case_libre[3]=== currentPlayer){
            return true;
        }
        if (case_libre[1]=== currentPlayer && case_libre[7]=== currentPlayer){
            return true;
        }
    }
    if (case_libre[1]=== currentPlayer && case_libre[2]=== currentPlayer){
        return true;
    }
    if (case_libre[7] == currentPlayer){
        if (case_libre[6]=== currentPlayer && case_libre[8]=== currentPlayer){
            return true;
        }
    }
}
    // Vide le contenu de toute les cases
function rest() {
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
        items[i].textContent = ''
        case_libre=[null,null,null,null,null,null,null,null,null]
    }
    }

