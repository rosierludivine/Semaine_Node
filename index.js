let arrayNumber = [12,73,99,22,11];
function nombreMax (number){
    let number = [0];
    for ( let i = 0; i < number.length, i++;){// pour i =0 ; 0 < longueur du tableau; i +1
        if (number [i] > max){//Si nombre dans le tableau est superieur a max 
            max = number [i];// alors max = le nombre de tableau 
        }
    }
}
const result = nombreMax(arrayNumber);
console.log(result);

// correction 
//Fonction permettant de parcourrir le tableau et sortir le plus grand nombre 

// function getMaxNomber (numbers) {
//     let max= numbers= [0]; // on declare une variable max on l'initialise avec numbers [0]
//     // on parcourt le tableau numbers avec la boucle for
//     for (let i = 0; i< numbers.length, i++;) {
//         if (numbers[i] > max){
//             max = numbers[i];
//         }

//     }
//     return max; 
// }

// //Pareil en fléché 
// const getMaxNomber= (number) => {
// 	let max= numbers= [0]; // on declare une variable max on l'initialise avec numbers [0]
//     // on parcourt le tableau numbers avec la boucle for
//     for (let i = 0; i< numbers.length, i++;) {
//         if (numbers[i] > max){
//             max = numbers[i];
//         }


//     }
//     return max; 
// }

// // Correction bryan 


// const someOtherArray = [2,4,6,9];
//let bigInt = Math.max(...someOtherArray);
//console.log(bigInt);

