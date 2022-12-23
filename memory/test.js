//Creation d'un carrée
const xTopBorder ="_";
const xdownBorder ="-";
const yBorder ="|";
const carte =[2,3,4,5,6,7,8,9,10,'V','D','R','AS'];
const cartePaire =[2,3,4,5,6,7,8,9,10,'V','D','R','AS'];

// Mélanger les cartes 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);// genérer l'index 
}
let nombre = getRandomInt(carte.length );// enlever 1 de l'index vu que le premier est 0 
let nombreCarte =nombre;// Afficher les valeurs du tableau carte 

const square = (`
 ${xTopBorder}
${yBorder}${nombreCarte}${yBorder}
 ${xdownBorder}`);


console.log(square);
