//1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
// let number =2 ;// le nombre est de 2 
// function sum (number){
// 	return number + number; // addiction du nombre par lui même 
// }
// // execution de la fonction 
// console.log(sum(number));

// Avec une fonction 


//2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.

// function ArrayNombers( Nombers){
//     let nombers =[0];
//     for (let i = [0]; i <nombers.length ; i++){
//         if (Nombers [i] > max){//Si nombre dans le tableau est superieur a max 
//             max = Nombers [i];// alors max = le nombre de tableau 
//         }
//     }
// }
// const result = ArrayNombers(Nombers);
// console.log(result);

//3- Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.

// let array ="welcome";//creation d'une chaine de caractère 
// function NewString (LastString){
//     return LastString.replace( /[eaoui]/gi, '');// on remplace les voyelles par rien, quels soit en majuscule ou en miniscules et pas que le premier 
// }
// const result= NewString(array);// on mets la nouvelle valeur danzs une constante 
// console.log(result);// on affiche le resultat 

// // on execute le  fichier 

// 4-Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.

// let arrayString = [ "salut","bienvenue", "Yoyo", "Abricot"];// Création du tableau de chaine de caractère

// function Order (arrayString){
//     arrayString.sort(); // trier le tableau 
//    return arrayString;// returner le tableau 
// }
// const result= Order(arrayString) // mettre le resultat dans une nouvelle variable 
// console.log(result);// afficher le resultat 

// 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.
// Marche avec des chiffres et non des nombres 

// let numbers = [3,1,6,4,7];// creation d'un tableau de nombre entier 
// function OrderNumbers (Numbers){//Creation de la fonction qui s'appelle OrderNumbers 
//     numbers.sort();//Mettre dans l'ordre croissant 
//    numbers.reverse();//Puis inverse l'ordre pour que sa soit décroissant 
//    return numbers;// on retourne le nombre 
// }
// const result= OrderNumbers(numbers); // On ajoute le nombre dans une nouvelle variable 
// console.log(result);//on affiche le résultat

// 9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.
// let text = 'Welcome';
let text = "Welcome";

function NombersVoyel (value){
    let voyel = 0; //convertir tous les caractères en miniscules 
    value = value.toLowerCase(); //rendre toutes la cahines de caractere en miniscule 
    for(let i = 0; i < value.length(); i++) {
        let c = value.charAt(i); // prendre le text caractère par caractère 
        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u'){ 
              return voyel ++;// incrementer de 1 la variable voyel
        }
     }
}
let result= NombersVoyel(text);
console.log(result);

