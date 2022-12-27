const readline = require('readline')


class morpion { // Creation d'un class 
    // on peut le voir comme une grande envellope qui se créer avec plusieurs sous enveloppe 
    // exemple une class voiture: qui a comme constructeur la couleur la marque le modele ...
  constructor(){
    // initiate letiables
    this.tabMorpion = [];//on créer un tableau 
    this.tabMorpion[8] = undefined;//on marque comme quoi l'index 8 est pas défini 
    this.tabMorpionPage = '';// le tableau de comporte rien 
    this.currentPlayer = false; // joueur 1 correspond  (O), joueur 2 correspond (X)
    this.finJeu = false;
    this.Deplacement = [];// enregidtrement des deplacements 
    
    this.rl = readline.createInterface({//Cration de l'interface 
      input: process.stdin,//données entree 
      output: process.stdout//données sortie 
    })

    }

    /// création du tableau 
    nouveauTableau(){
        this.tabMorpionPage = `${this.Affichage(this.tabMorpion[0])} | ${this.Affichage(this.tabMorpion[1])} | ${this.Affichage(this.tabMorpion[2])}
    ---------
    ${this.Affichage(this.tabMorpion[3])} | ${this.Affichage(this.tabMorpion[4])} | ${this.Affichage(this.tabMorpion[5])}
    ---------
    ${this.Affichage(this.tabMorpion[6])} | ${this.Affichage(this.tabMorpion[7])} | ${this.Affichage(this.tabMorpion[8])}`;
    }//cHaque ligne correspond a une ligne du tableau 

    lancement(){//lancement du jeu 
        this.ecran();// mettre a la bonne resolution

        //reprendre ce que le joueur a ecrit 
        this.rl.on("line", (input) => {

            if(this.tabMorpion.length <= 9){// le tableau est a 8 de longueur  
              // Savoir ou sela va être bouger 
              this.mouvement(parseInt(input))//ce que la personne a ecrit 
              // continuer a jouer
            } else {
              console.log("Fin de la partie!");
              this.processGame();// processus de la parti comment le joueur peut gagner 
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
    this.ecran();
    this.processGame();
    if(!this.finJeu){
      // switch player
      this.joueur = arguments[0] ? this.joueur : !this.joueur;
      console.log(`Jouer ${this.joueur(this.joueur)},(position[1-9]): `)
    }
  }
  // fonction qui prend en compte les possibilité pour gagne 
  possibilite(){
    // 5 possibilte pour gagner 
    if(this.Deplacement.length >= 5){
      var checkSet = new Set()
      // possibilité vertical alignments
      if(this.tabMorpion[0] && this.tabMorpion[3] && this.tabMorpion[6] && (Array.from(checkSet.add(this.tabMorpion[0]).add(this.tabMorpion[3]).add(this.tabMorpion[6])).length === 1)){
        console.log(`joueur ${this.numeroJoueur(this.tabMorpion[0])} gagner!!`);
        this.finJeu();
      }
      checkSet.clear();// effacer le tableau si gagner
      //horizontale 1
      // si les casse sont rempli par les joueur alors ces gagner 
      if(this.tabMorpion[1] && this.tabMorpion[4] && this.tabMorpion[7] && (Array.from(checkSet.add(this.tabMorpion[1]).add(this.tabMorpion[4]).add(this.tabMorpion[7])).length === 1)){
        console.log(`Player ${this.numeroJoueur(this.tabMorpion[1])} gagner!!`);
        this.finJeu();
      }
      checkSet.clear();// effacer le tableau 
      // horizontale 2
      // si les casse sont rempli par les joueur alors ces gagner 
      if(this.tabMorpion[2] && this.tabMorpion[5] && this.tabMorpion[8] && (Array.from(checkSet.add(this.tabMorpion[2]).add(this.tabMorpion[5]).add(this.tabMorpion[8])).length === 1)){
        console.log(`joueur ${this.numeroJoueur(this.tabMorpion[2])} gagner!!`);
        this.finJeu();
      }
      checkSet.clear();// effacer le tableau 
      // horizontale 3
      // si les casse sont rempli par les joueur alors ces gagner 
      if(this.tabMorpion[0] && this.tabMorpion[1] && this.tabMorpion[2] && (Array.from(checkSet.add(this.tabMorpion[0]).add(this.tabMorpion[1]).add(this.tabMorpion[2])).length === 1)){
        console.log(`joueur ${this.numeroJoueur(this.tabMorpion[0])} gagner!!`);
        this.finJeu();
      }
      checkSet.clear();// effacer le tableau 
      //VERTICAL    
      // si les casse sont rempli par les joueur alors ces gagner 
      if(this.tabMorpion[3] && this.tabMorpion[4] && this.tabMorpion[5] && (Array.from(checkSet.add(this.tabMorpion[3]).add(this.tabMorpion[4]).add(this.tabMorpion[5])).length === 1)){
        console.log(`joueur  ${this.numeroJoueur(this.tabMorpion[3])} gagner!!`);
        this.finJeu();
      }
      checkSet.clear();// effacer le tableau 
      //VERTICAL
      // si les casse sont rempli par les joueur alors ces gagner 
      if(this.tabMorpion[6] && this.tabMorpion[7] && this.tabMorpion[8] && (Array.from(checkSet.add(this.tabMorpion[6]).add(this.tabMorpion[7]).add(this.tabMorpion[8])).length === 1)){
        console.log(`joueur ${this.numeroJoueur(this.tabMorpion[6])} gagner!!`);
        this.finJeu();
      }
      checkSet.clear();// effacer le tableau 
      //  diagonal
      // si les casse sont rempli par les joueur alors ces gagner 
      if((this.tabMorpion[0] && this.tabMorpion[4] && this.tabMorpion[8] && (Array.from(checkSet.add(this.tabMorpion[0]).add(this.tabMorpion[4]).add(this.tabMorpion[8])).length === 1)) || (this.tabMorpion[2] && this.tabMorpion[4] && this.tabMorpion[6] && (Array.from(checkSet.add(this.tabMorpion[2]).add(this.tabMorpion[4]).add(this.tabMorpion[6])).length === 1))){
        console.log(`Player ${this.numeroJoueur(this.tabMorpion[4])} Wins!!`);
        this.finJeu();
      }
      checkSet.clear();// effacer le tableau 
    }
  }
  mouvement(position){
    var self = this
    // check if poosition is eligible
    if((position > 9) || position < 1){
      // wrong position
      self.mouvementErreur("Wrong position!!! ");
    }
    // check if position is occupied
    if(self.tabMorpion[(position - 1)] !== undefined){
      console.log(self.tabMorpion[(position - 1)])
      // position occupied
      self.mouvementErreur("Position Occupied!!! ");
    } else {
      // register move
      self.tabMorpion[(position - 1)] = self.caractere(self.joueur);
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
      this.tabMorpion[pos] = ' '
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

var game = new tabMorpion();

game.lancement();



