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


}

