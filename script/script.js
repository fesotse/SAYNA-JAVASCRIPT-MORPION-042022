// initialization des variables
let coup=0;
// what is this????
let case_libre=[null,null,null,null,null,null,null,null,null]

let you="x";
let cpu="O";
let you_score=0;
let cpu_score=0;
var currentPlayer= you;
    // Récupération des cases à clicker
    // const items = Array.from(document.getElementsByClassName('grid-item'));
    // console.log(items)

function choiseCase(id) {
    const position=event.target.id;
    if (case_libre[position]==null){
        //cette étape permet d'éviter le chevauchement des pions
        case_libre[position] = currentPlayer;
        // document.getElementById('item${position}').innerHTML = currentPlayer;
        console.log(case_libre[position])
        console.log(event.target.id)
        //ecriture sur html
        event.target.innerText = currentPlayer;
        console.log(event.target.innerText)
        
        //change of classname of grid-itemchossen
        if (coup%2==0){
            event.target.className="choose1";
        }
        else if (coup%2==1){
            event.target.className='choose2';
        }
        
        if (youWon === true){
            document.getElementById('end-game').style.display='block'
            document.getElementById('end-game').innerHTML="You have win";
            //NEED TO CHECK THIS SECTION ABOUT SCORE
            you_score+=1;
            // document.getElementsByClassName('${currentPlayer}-score').innerText='${score}'
        }
        if (cpuWon === true){
            document.getElementById('layer2').style.display="block";
            console.log('cpu has won')
            cpu_score+=1;
        }
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
function youWon(){
    if (item1 === you){
        if (item2=== you && item3=== you){
            return true;
        }
        if (item5=== you && item9=== you){
            return true;
        }
        if (item4=== you && item7=== you){
            return true;
        }
    }
    if (item3 === you){
        if (item5=== you && item7=== you){
            return true;
        }
        if (item6=== you && item9=== you){
            return true;
        }
    }
    if (item5 === you){
        if (item6=== you && item4=== you){
            return true;
        }
        if (item2=== you && item8=== you){
            return true;
        }
    }
    if (item8 == you){
        if (item7=== you && item9=== you){
            return true;
        }
    }
}
function cpuWon(){
    if (case_libre[0] === cpu){
        if (case_libre[1]=== cpu && case_libre[2]=== cpu){
            return true;
        }
        if (case_libre[4]=== cpu && case_libre[8]=== cpu){
            return true;
        }
        if (case_libre[3]=== cpu && case_libre[6]=== cpu){
            return true;
        }
    }
    if (case_libre[2] === cpu){
        if (case_libre[4]=== cpu && case_libre[6]=== cpu){
            return true;
        }
        if (case_libre[5]=== cpu && case_libre[8]=== cpu){
            return true;
        }
    }
    if (case_libre[4] === cpu){
        if (case_libre[5]=== cpu && case_libre[3]=== cpu){
            return true;
        }
        if (case_libre[1]=== cpu && case_libre[7]=== cpu){
            return true;
        }
    }
    if (case_libre[7] == cpu){
        if (case_libre[6]=== cpu && case_libre[8]=== cpu){
            return true;
        }
    }
}

function drawn(){
    if ( coup=== 9 ){
        
    } 
}
    // Vide le contenu de toute les cases
function reset() {
    document.getElementById('item1').className= "grid-item";
    document.getElementById('item2').className= "grid-item";
    document.getElementById('item3').className= "grid-item";
    document.getElementById('item4').className= "grid-item";
    document.getElementById('item5').className= "grid-item";
    document.getElementById('item6').className= "grid-item";
    document.getElementById('item7').className= "grid-item";
    document.getElementById('item8').className= "grid-item";
    document.getElementById('item9').className= "grid-item";
    case_libre=[null,null,null,null,null,null,null,null,null]
    item1.textContent="";
    item2.textContent="";
    item3.textContent="";
    item4.textContent="";
    item5.textContent="";
    item6.textContent="";
    item7.textContent="";
    item8.textContent="";
    item9.textContent="";
    // item1.className="grid-item",
}

