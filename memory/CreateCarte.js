//Creation d'un carrée
const xTopBorder ="_";
const xdownBorder ="-";
const yBorder ="|";
const carte =[1,2,3,4];
const cartePaire =[1,2,3,4];

// Mélanger les cartes 
function getRandomInt(max) {
    min = Math.ceil(1);// la valeur min 
    max = Math.floor(5);//la valeur max
    return Math.floor(Math.random() * (max - min)) + min;//retourne une valeur random avec min inclu et max exclus 
}
let nombre = getRandomInt(carte.length );// enlever 1 de l'index vu que le premier est 0 
let newValue = []; 

// FIN DU MELANGE //

///Condition pour ne pas lavoir 3 fois 
// Pour i < carte.length 
// si NewValue !== nombre alors 
for (i =0 ; i < carte.length;) {
    
    if (newValue.includes(nombre) === false){
          newValue.push(nombre) ; 
         console.log(newValue);
         newValue.push(newValue);
        i++;
        return newValue ; 
    }else {
        carte.splice(carte);
    }
    return newValue.toString; 
}

console.log(newValue.toString);

  /// création du tableau 
  tableauModifier();{
    this.memoryPage = `${this.Affichage(this.newValue[0])} | ${this.Affichage(this.newValue[1])} | ${this.Affichage(this.newValue[2])} | ${this.Affichage(this.newValue[3])}
---------
${this.Affichage(this.newValue[4])} | ${this.Affichage(this.newValue[5])} | ${this.Affichage(this.newValue[6])} | ${this.Affichage(this.newValue[7])}`;
}//Chaque ligne correspond a une ligne du tableau 

console.log(memoryPage);


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