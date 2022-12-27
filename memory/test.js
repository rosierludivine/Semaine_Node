// const readline = require('node:readline');

// //Creation d'une class appeler memory 
// class memory { 
//     // une class peut etre visualiser avec une grande boite a qui comporte d autre petite
//     // exemple une class voiture qui comporte  des object exemple le modele la couleur et la marque 
//     //Pour appeler les object qui sont comprise dans la class il faut memory.lenomdelobject
//     constructor(){// le constructeur permet de initialiser les objects contenus dans la class 
        
//         this.memory = ['1','2','3','4','5','6','7','8'];// creation du tableau 
//         this.memory[8] = undefined ; // taille du tableau (de 0 a 7)
//         this.memoryPage =''; // 
//         this.finJeu = false; //fin du jeu = faux cest a dire que ten qu'il est pas vrai le jeu continue 
//         this.deplacement1 = [];// premiere carte tourner 
//         this.deplacement2 = [];// deuxieme carte tourner

//         //Creation de l'interface d'ecriture 
//         this.rl = readline.createInterface({
//             input: process.stdin,//Valeur entrée
//             stdout: process.stdout// valeur sorti 
//         })

//     }

//       /// création du tableau 
//     tableMemory(){
//     this.memory = `${this.Affichage(this.memory[0])} | ${this.Affichage(this.memory[1])} | ${this.Affichage(this.memory[2])}
// ---------
// ${this.Affichage(this.memory[3])} | ${this.Affichage(this.memory[4])} | ${this.Affichage(this.memory[5])}
// ---------
// ${this.Affichage(this.memory[6])} | ${this.Affichage(this.memory[7])} | ${this.Affichage(this.memory[8])}`;
// }//Chaque ligne correspond a une ligne du tableau 


// }
// console.log(memory.tableMemory);
const readline = require('readline')

'use strict';// mode strict

class memory { // Creation d'un class 
    // on peut le voir comme une grande envellope qui se créer avec plusieurs sous enveloppe 
    // exemple une class voiture: qui a comme constructeur la couleur la marque le modele ...
  constructor(){
    // initiate variables
    this.memory = ['1','2','3','4','5','6','7','8'];//on créer un tableau 
    this.randomNumber = [];
    this.memory[8] = undefined;//on marque comme quoi l'index 8 est pas défini 
    this.memoryPage = '';// le tableau de comporte rien 
    this.joueur = false; // joueur 1 correspond  (O), joueur 2 correspond (X)
    this.finJeu = false;
    this.Mouvement1 = [];// enregidtrement des deplacements
    this.Mouvement2 = [];// enregidtrement des deplacements 
    
    this.rl = readline.createInterface({//Cration de l'interface 
      input: process.stdin,//données entree 
      output: process.stdout//données sortie 
    })

  }

  /// création du tableau 
  tableauModifier(){
    this.memoryPage = `${this.Affichage(this.memory[0])} | ${this.Affichage(this.memory[1])} | ${this.Affichage(this.memory[2])} | ${this.Affichage(this.memory[3])}
---------
${this.Affichage(this.memory[4])} | ${this.Affichage(this.memory[5])} | ${this.Affichage(this.memory[6])} | ${this.Affichage(this.memory[7])}`;
}//Chaque ligne correspond a une ligne du tableau 

  // lancement du jeu 
  commencer(){
    this.ecran();

    // voir ce ca ecrit la personne 
    this.rl.on("line", (input) => {

      if(this.memory.length <= 9){
        // Savoir ou sela va être bouger 
        this.mouvement(parseInt(input))
        console.log();
        // continuer a jouer
      } else {
        console.log("Game Ended!");
        this.processGame();
      }
    })

    // supprimer un evenement grace a un retour en arriere 
    process.stdin.on('keypress', (str, key) => {
      // supprimer le changement
      if(key.sequence === '\b'){
        this.dernierMouvement()
      }
    })
  }

  //Fin du jeu 
  finJeu(){
    this.rl.close();// fermer la discution
    this.finJeu = true;// la Fin du jeu est vrari 
    console.log("Moves history --- ")
    console.log(this.Deplacement)
    process.exit();// quitter la page 
    return false; 
  }

  //continuer a jouer 
  continuerJouer(){
    // console.log("Continuing: this.memory === ", this.memory)
    this.ecran();
    this.processGame();
    if(!this.finJeu){
      // switch player
      this.joueur = arguments[0] ? this.joueur : !this.joueur;
      console.log(`Player ${this.joueur(this.joueur)}, Your move! (position[1-9]): `)
    }
  }

  processGame(){
    // 5 possibilte pour gagner 
    if(this.Deplacement.length >= 5){
      var checkSet = new Set()
      // possibilité vertical alignments
      if(this.memory[0] && this.memory[3] && this.memory[6] && (Array.from(checkSet.add(this.memory[0]).add(this.memory[3]).add(this.memory[6])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.memory[0])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      //horizontale 1
      if(this.memory[1] && this.memory[4] && this.memory[7] && (Array.from(checkSet.add(this.memory[1]).add(this.memory[4]).add(this.memory[7])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.memory[1])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      // horizontale 2
      if(this.memory[2] && this.memory[5] && this.memory[8] && (Array.from(checkSet.add(this.memory[2]).add(this.memory[5]).add(this.memory[8])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.memory[2])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      // horizontale 3
      if(this.memory[0] && this.memory[1] && this.memory[2] && (Array.from(checkSet.add(this.memory[0]).add(this.memory[1]).add(this.memory[2])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.memory[0])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      //VERTICAL    
      if(this.memory[3] && this.memory[4] && this.memory[5] && (Array.from(checkSet.add(this.memory[3]).add(this.memory[4]).add(this.memory[5])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.memory[3])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      //VERTICAL
      if(this.memory[6] && this.memory[7] && this.memory[8] && (Array.from(checkSet.add(this.memory[6]).add(this.memory[7]).add(this.memory[8])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.memory[6])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      //  diagonal
      if((this.memory[0] && this.memory[4] && this.memory[8] && (Array.from(checkSet.add(this.memory[0]).add(this.memory[4]).add(this.memory[8])).length === 1)) || (this.memory[2] && this.memory[4] && this.memory[6] && (Array.from(checkSet.add(this.memory[2]).add(this.memory[4]).add(this.memory[6])).length === 1))){
        console.log(`Player ${this.numeroJoueur(this.memory[4])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
    }
  }

  // helpers
  Affichage(item){
    return item === undefined ? ' ' : item
  }

  joueur(plyr){
    return plyr ? 1 : 2
  }

  numeroJoueur(char){
    return this.joueur(char === 'X')
  }

  caractere(plyr){
    return plyr ? 'X' : 'O'
  }
  
  ecran(){
    this.updateLayout()
    console.log(this.memoryPage);
  }


  mouvement(position){
    var self = this
    // check if poosition is eligible
    if((position > 9) || position < 1){
      // wrong position
      self.mouvementErreur("Wrong position!!! ");
    }
    // check if position is occupied
    if(self.memory[(position - 1)] !== undefined){
      console.log(self.memory[(position - 1)])
      // position occupied
      self.mouvementErreur("Position Occupied!!! ");
    } else {
      // register move
      self.memory[(position - 1)] = self.caractere(self.joueur);
      // record move
      self.mouvementDeplacement((position - 1), self.joueur);
      // continue playing
      self.continuerJouer();
    }
  }

  // notify wrong moves
  mouvementErreur(message){
    console.log(`${arguments[0] ? arguments[0]:''}Player ${this.joueur(this.joueur)}, Your move! (position[1-9]): `)
  }

  mouvementDeplacement(position, player){
    this.Deplacement.push({
      position: position,
      char: this.caractere(this.joueur),
      player: this.joueur(this.joueur)
    });
  }

  dernierMouvement(){
    // delete character
    if(this.Deplacement.length > 1){
      var pos = this.Deplacement[(this.Deplacement.length - 1)].position
      this.memory[pos] = ' '
      // unregister move 
      this.Deplacement.pop();
      // continue play
      this.continuerJouer()
    } else {
      console.log("Can't delete any more moves!!");
      // continue play
      this.continuerJouer(true); // don't change player with the next move
    }
  }

  processInput(moveContents){
    var mc = new Set(moveContents);
    this.mouvementDeplacement(mc[0], mc[1], joueur);
  }

}

var game = new memory();

game.commencer();