// initialization des variables
let coup=0;
let case_libre=[null,null,null,null,null,null,null,null,null]
let you="x";
let cpu="O";
let you_score=0;
let cpu_score=0;
// Mise en place des tours des joueurs dont you est le premier
var currentPlayer= function () {
    if (coup%2==0 || coup==0){
        resultat=you;
    }
    if (coup%2==1){
        resultat=cpu;
    }
    return resultat
}
//ecriture des pions
    // Récupération des cases à clicker
    const items = Array.from(document.getElementsByClassName('grid-item'));
    console.log(items)

function choiseCase() {
    const position=event.target.id;
    console.log(position);
    if (case_libre[position]==null){
        //cette étape permet d'éviter le chevauchement des pions
        case_libre[position] = currentPlayer;
        //ecriture sur html
        event.target.innerText = you;
        coup += 1;
        console.log(case_libre[position])
    }
    else if (case_libre[position!=null]){
        continu
    }
    
        // if (items==null){
        //     items=currentPlayer;
        //     coup+=1;
        // }
        // else{
        //     continu;
        // }

    }

    // Vide le contenu de toute les cases
    function rest() {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
        }
    }

;