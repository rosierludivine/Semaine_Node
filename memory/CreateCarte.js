//Creation d'un carrée
const xTopBorder ="_";
const xdownBorder ="-";
const yBorder ="|";
const carte =[0,1,2,3];
const cartePaire =[0,1,2,3];

// Mélanger les cartes 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);// genérer l'index 
}
let nombre = getRandomInt(carte.length );// enlever 1 de l'index vu que le premier est 0 
let nombreCarte =nombre;// Afficher les valeurs du tableau carte 

//Création de la carte  
const square = (`
 ${xTopBorder}
${yBorder}${nombreCarte}${yBorder}
 ${xdownBorder}`);

console.log(square);
// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');
// const { Console, clear } = require('node:console');
// const resultat = '';


// const carte =['A','B','C','D'];
// const cartePaire =['A','B','C','D'];

// // Mélanger les cartes 
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);// genérer l'index 
// }

// var TableauCarte  = [ 
//     [0,0,0,0],
//     [0,1,0,0]
// ];

// function RemplirTableau (){
//     let newValue = ""; 

//     for (let i =0; i <nombers.length ; i++){// Parcours tout le tableau dans la blobalité
//         for (let j=0 ; j <nombers[j] ; j++){//regarde tout les index du tableau 
//             let value ='';
//             if(TableauCarte[i][j] !== 0){//Si le tableau comporte un 0 alors 
//                 value === 3;
//                 console.log(value);
//             }
//         }
//     }
//     resultat = txt; 
//     return resultat;
// }
// console.log (TableauCarte);