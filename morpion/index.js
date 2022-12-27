const readline = require('readline')

'use strict';

class morpion { // Creation d'un class 
    // on peut le voir comme une grande envellope qui se créer avec plusieurs sous enveloppe 
    // exemple une class voiture: qui a comme constructeur la couleur la marque le modele ...
  constructor(){
    // initiate variables
    this.morpion = [];//on créer un tableau 
    this.morpion[8] = undefined;//on marque comme quoi l'index 8 est pas défini 
    this.morpionPage = '';// le tableau de comporte rien 
    this.currentPlayer = false; // joueur 1 correspond  (O), joueur 2 correspond (X)
    this.finJeu = false;
    this.Deplacement = [];// enregidtrement des deplacements 
    
    this.rl = readline.createInterface({//Cration de l'interface 
      input: process.stdin,//données entree 
      output: process.stdout//données sortie 
    })

  }

  /// création du tableau 
  updateLayout(){
    this.morpionPage = `${this.Affichage(this.morpion[0])} | ${this.Affichage(this.morpion[1])} | ${this.Affichage(this.morpion[2])}
---------
${this.Affichage(this.morpion[3])} | ${this.Affichage(this.morpion[4])} | ${this.Affichage(this.morpion[5])}
---------
${this.Affichage(this.morpion[6])} | ${this.Affichage(this.morpion[7])} | ${this.Affichage(this.morpion[8])}`;
}//cHaque ligne correspond a une ligne du tableau 

  // lancement du jeu 
  startGame(){
    this.ecran();

    // voir ce ca ecrit la personne 
    this.rl.on("line", (input) => {

      if(this.morpion.length <= 9){
        // Savoir ou sela va être bouger 
        this.mouvement(parseInt(input))
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
    // console.log("Continuing: this.morpion === ", this.morpion)
    this.ecran();
    this.processGame();
    if(!this.finJeu){
      // switch player
      this.currentPlayer = arguments[0] ? this.currentPlayer : !this.currentPlayer;
      console.log(`Player ${this.joueur(this.currentPlayer)}, Your move! (position[1-9]): `)
    }
  }

  processGame(){
    // 5 possibilte pour gagner 
    if(this.Deplacement.length >= 5){
      var checkSet = new Set()
      // possibilité vertical alignments
      if(this.morpion[0] && this.morpion[3] && this.morpion[6] && (Array.from(checkSet.add(this.morpion[0]).add(this.morpion[3]).add(this.morpion[6])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.morpion[0])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      //horizontale 1
      if(this.morpion[1] && this.morpion[4] && this.morpion[7] && (Array.from(checkSet.add(this.morpion[1]).add(this.morpion[4]).add(this.morpion[7])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.morpion[1])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      // horizontale 2
      if(this.morpion[2] && this.morpion[5] && this.morpion[8] && (Array.from(checkSet.add(this.morpion[2]).add(this.morpion[5]).add(this.morpion[8])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.morpion[2])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      // horizontale 3
      if(this.morpion[0] && this.morpion[1] && this.morpion[2] && (Array.from(checkSet.add(this.morpion[0]).add(this.morpion[1]).add(this.morpion[2])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.morpion[0])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      //VERTICAL    
      if(this.morpion[3] && this.morpion[4] && this.morpion[5] && (Array.from(checkSet.add(this.morpion[3]).add(this.morpion[4]).add(this.morpion[5])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.morpion[3])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      //VERTICAL
      if(this.morpion[6] && this.morpion[7] && this.morpion[8] && (Array.from(checkSet.add(this.morpion[6]).add(this.morpion[7]).add(this.morpion[8])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.morpion[6])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();
      //  diagonal
      if((this.morpion[0] && this.morpion[4] && this.morpion[8] && (Array.from(checkSet.add(this.morpion[0]).add(this.morpion[4]).add(this.morpion[8])).length === 1)) || (this.morpion[2] && this.morpion[4] && this.morpion[6] && (Array.from(checkSet.add(this.morpion[2]).add(this.morpion[4]).add(this.morpion[6])).length === 1))){
        console.log(`Player ${this.numeroJoueur(this.morpion[4])} Wins!!`);
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
    console.log(this.morpionPage);
  }


  mouvement(position){
    var self = this
    // check if poosition is eligible
    if((position > 9) || position < 1){
      // wrong position
      self.mouvementErreur("Wrong position!!! ");
    }
    // check if position is occupied
    if(self.morpion[(position - 1)] !== undefined){
      console.log(self.morpion[(position - 1)])
      // position occupied
      self.mouvementErreur("Position Occupied!!! ");
    } else {
      // register move
      self.morpion[(position - 1)] = self.caractere(self.currentPlayer);
      // record move
      self.mouvementDeplacement((position - 1), self.currentPlayer);
      // continue playing
      self.continuerJouer();
    }
  }

  // notify wrong moves
  mouvementErreur(message){
    console.log(`${arguments[0] ? arguments[0]:''}Player ${this.joueur(this.currentPlayer)}, Your move! (position[1-9]): `)
  }

  mouvementDeplacement(position, player){
    this.Deplacement.push({
      position: position,
      char: this.caractere(this.currentPlayer),
      player: this.joueur(this.currentPlayer)
    });
  }

  dernierMouvement(){
    // delete character
    if(this.Deplacement.length > 1){
      var pos = this.Deplacement[(this.Deplacement.length - 1)].position
      this.morpion[pos] = ' '
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
    this.mouvementDeplacement(mc[0], mc[1], currentPlayer);
  }

}

var game = new morpion();

game.startGame();