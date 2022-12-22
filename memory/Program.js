const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { Console, clear } = require('node:console');

console.log("Welcome to the memory game");
//Creation de la interaction 
const rl = readline.createInterface({ input, output });
  
//Poser la question
rl.question('What level do you want( Easy ,Medium ,Hard ) ', (level) => {
  //Faire la reponse
  console.log(`Your level is  ${level}`);
    //fermeture de la partie écriture dans la console
   rl.close();
    // Afficher les regles
    //
    //

   //Ecriture Bonne chance
  console.log('Good luck !')

  //Gestion du temps pour 
    setTimeout(() => {  
    clear();
    }, "5000") 


});