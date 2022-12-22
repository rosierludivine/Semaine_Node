const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

//Creation de la interface
const rl = readline.createInterface({ input, output });

//Poser la question
rl.question('What is tour name? ', (answer) => {
  //Faire la reponse
  console.log(`Your name is : ${answer}`);
    //fermeture de la partie écriture dans la console
  rl.close();
});