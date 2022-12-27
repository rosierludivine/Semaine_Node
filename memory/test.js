const readline = require('node:readline');
const { urlToHttpOptions } = require('node:url');

//Creation d'une class appeler memory 
class memory { 
    // une class peut etre visualiser avec une grande boite a qui comporte d autre petite
    // exemple une class voiture qui comporte  des object exemple le modele la couleur et la marque 
    //Pour appeler les object qui sont comprise dans la class il faut memory.lenomdelobject
    constructor(){// le constructeur permet de initialiser les objects contenus dans la class 
        
        this.memory = [];// creation du tableau 
        this.memory[7] = undefined ; // taille du tableau 
        this.memoryPage = '1','2','3','4','5','6','7','8'; // 
        this.finJeu = false; //fin du jeu = faux cest a dire que ten qu'il est pas vrai le jeu continue 
        this.deplacement1 = [];// premiere carte tourner 
        this.deplacement2 = [];// deuxieme carte tourner

    }
}