const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { Console, clear } = require('node:console');
const resultat = '';


const carte =['A','B','C','D'];
const cartePaire =['A','B','C','D'];

// Mélanger les cartes 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);// genérer l'index 
}

var TableauCarte  = [ 
    [0,0,0,0],
    [0,1,0,0]
];

function RemplirTableau (){
    let newValue = ""; 

    for (let i =0; i <nombers.length ; i++){// Parcours tout le tableau dans la blobalité
        newValue += '';
        for (let j=0 ; j <nombers[j] ; j++){//regarde tout les index du tableau 
            if(TableauCarte[i][j] !== 0){//Si le tableau comporte un 0 alors 
                j = "A";
            }
        

        }
    }

    resultat = txt; 

}
console.log (TableauCarte);