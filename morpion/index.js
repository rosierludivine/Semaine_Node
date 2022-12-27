const readline = require('readline')


class morpion { // Creation d'un class 
    // on peut le voir comme une grande envellope qui se créer avec plusieurs sous enveloppe 
    // exemple une class voiture: qui a comme constructeur la couleur la marque le modele ...
  constructor(){
    // initiate variables
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

}
console.log(nouveauTableau);

