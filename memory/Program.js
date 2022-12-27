// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');
// const { Console, clear } = require('node:console');

// console.log("Welcome to the memory game");
// //Creation de la interaction 
// const rl = readline.createInterface({ input, output });
  
// //Poser la question
// rl.question('What level do you want( Easy ,Medium ,Hard ) ', (level) => {
//   //Faire la reponse
//   console.log(`Your level is  ${level}`);
//     //fermeture de la partie écriture dans la console
//    rl.close();
//     // Afficher les regles
//     //
//     //

//    //Ecriture Bonne chance
//   console.log('Good luck !')

//   //Gestion du temps pour 
//     setTimeout(() => {  
//     clear();
//     }, "5000") 


// });

// Mélanger les cartes 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);// genérer l'index 
}
let nombre ='';
let nombreCarte='';
let sequence = [1, 2, 3, 4];
for (var i = 0; i < sequence.length; i++) {
  getRandomInt(sequence);
  nombre = getRandomInt(sequence.length );// enlever 1 de l'index vu que le premier est 0 
  nombreCarte =nombre;// Afficher les valeurs du tableau carte 
  return nombreCarte; 
  
}
console.log(nombreCarte);

// Mélanger les cartes 
function getRandomInt(max) {
  min = Math.ceil(1);// la valeur min 
  max = Math.floor(5);//la valeur max
  return Math.floor(Math.random() * (max - min)) + min;//retourne une valeur random avec min inclu et max exclus 
}
let nombreRandom = getRandomInt(carte.length );// enlever 1 de l'index vu que le premier est 0 
let newValue = []; 

// FIN DU MELANGE //

///Condition pour ne pas lavoir 3 fois 
// Pour i < carte.length 
// si NewValue !== nombre alors 
for (i =0 ; i < carte.length;) {
    if (newValue.includes(nombreRandom) === false){
          newValue.push(nombreRandom) ; 
         console.log(newValue);
        i++;
        return newValue ; 
    }else {
        carte.splicec(carte);
    }
    return newValue.toString; 
}

console.log(newValue.toString);
console.log(carte);


