//Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.

// const fs = require('fs');//importation d'un module pour exportation dun fichier

// fs.readFile('text.txt', 'utf-8', (err, data) =>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
// })


// Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.
// const fs = require('fs');

// //voir le fichier 
// fs.readFile('text.txt', 'utf-8', (err, data) =>{
//     if (err) {
//         console.log(err)
//         return
//     }
// // Ecrire dans le fichier (nom du fichier , le changement voulu , type d'ecriture)
//     fs.writeFile('text.txt', 'Le changement a été fait ', 'utf-8', (err) =>{
//         if (err) {//si erreur 
//                 console.log(err)//si erreur 
//                 return// afficher l'erreur 
//         }
//          console.log(data)// afficher le changement 
//     })
// })



// Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.

// const http = require('http');
// const fs = require('fs');
// http.createServer(function (req, res) {
    
//     fs.readFile('text.txt', 'utf-8', (err, data) =>{//Lire le fichier (le nom du fichier, le types de fichier, avec la fonction )
//         if (err) {
//             console.log(err)//ecrire dans le terminal si il y a une erreur 
//             return//retourner le fichier 
//         }
//            console.log('Ouvrer un onglet en ecrivant localhost:8080')// Ecrire si cela fonctionne 

//     res.writeHead(200, {'Content-Type': 'text/plain'});//Afficher la page static 200 est le code comme exemple 404 le content type permet de indique au client le type de contenu réellement renvoyé.
//     res.write(  data );// Text qui va être afficher lors de lafficchage de la page 
//     res.end();
//     })
// }).listen(8080);//le port du site local 8080


// Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.
// const fs = require('fs');// Immorter le module fs

// fs.readdir("exercice3", (err, files) => {// Creation de la fonction readdir
//     if (err)//Si erreur 
//       console.log(err);// afficher err
//     else {// sinon
//       console.log("\nList files in directory :");// afficher list files in directory 
//       files.forEach(file => { //Pour chaque fichier 
//         console.log(file);// afficher le nom du fichier 
//       })
//     }
//   })

// Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

// const fs = require('fs');// Immorter le module fs
// fs.writeFile('exercice4.txt', 'Exercice4', (error) =>{ 
//   if (error){
//     console.log(error)
//     return;
//   }
//   console.log('fichier créer') 

// })
// S'il ne trouve pas le fichier alors il le créer 

// Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.
// const fs = require('fs');//module fs
// const os = require('os');//modume os 

// console.log(os.homedir());
// fs.readdir((os.homedir()), (err, files) => { // Creation de la fonction readdir prenant le chemin du repertoire personnel de l'utilisateur actuel grâce au os
//         if (err)//Si erreur 
//           console.log(err);// afficher err
//         else {// sinon
//           console.log("\nList files in directory :");// afficher list files in directory 
//           files.forEach(file => { //Pour chaque fichier 
//             console.log(file);// afficher le nom du fichier 
//           })
//         }
//       })

// Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.

// // Écrivez un programme Node.js qui utilise le module path pour manipuler les chemins de fichiers.
// const path = require ('path');// module Path


// console.log(path.basename('Semaine_19decembre/text.txt', '.txt'));
// // Returns: 'text', il retourne que le nom du fichier sans lextension 

// console.log(process.env.PATH);
// // return l'emplacement de l'environnement path

// console.log(path.dirname('/Semaine_19decembre/exercice4.txt'));


// Écrivez un programme Node.js qui utilise le module querystring pour analyser une chaîne de requête URL.



// Écrivez un programme Node.js qui utilise le module events pour créer un émetteur d'événements personnalisé.