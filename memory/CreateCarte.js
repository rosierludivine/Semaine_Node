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