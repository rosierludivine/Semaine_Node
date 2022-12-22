// Exercice 3 Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.

// const fs = require('fs');
// const http = require('http');

// http.createServer((httpRequest, httpResponse) => {//creation du serveur 
// console.log('request', httpRequest);
//     fs.readFile('text.txt', 'utf-8',(err, data) => {// Avoir acces au fichier
//         if (err){
//             console.log(err)

//             httpResponse.statusCode =500; // gérer nous meme le code dpour lerreur 
//             httpResponse.end('an error has occured');
//             return; 
//         }

//         httpResponse.setHeader('Content-Type', 'text/plain');
//         httpResponse.end(data);
//     })
// }).listen(3000, () => {
//     console.log('server web listening on port 3000')//validation de la bonne fonctionnalité
// });

// Exercice 2 Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

//// const fs = require('fs');

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

// Exercice 4 Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.

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

// Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel

// const os = require ('os');

// console.log(os.homedir());

// Exerecice 7 Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.

// const {exec } = require ('child_process');

// exec('dir', (err, stdout, stderr)=>{//stdout commande qui existe deja 
//     if (err) console.log(err)

//     console.log(stdout);
// })

//Exerecice 8 Écrivez un programme Node.js qui utilise le module path pour manipuler les chemins de fichiers.

//fonction join resous les chemin relatif (../) et affiche le chemin entier 
// const path = require ('path');
// const joinPathExample = path.join('/test/path', 'end/of/Path');

// Exerecice 9 Écrivez un programme Node.js qui utilise le module querystring pour analyser une chaîne de requête URL.

// const querystring = require('querystring');

// const queryString = 'name=test&birthDate=040499'; 

// const parseQuery = querystring.parse(queryString)

// console.log('parsed query string:', parsedQuery)

//Exerecice 10 Écrivez un programme Node.js qui utilise le module events pour créer un émetteur d'événements personnalisé.

const EventEmitter = require ('events');
class MyEmitter extends EventEmitter {}

const muEmitter = new MyEmitter();

MyEmitter.on('event', () => {
    console.log('une evenment a eu lieu!');
})
MyEmitter.emit('event');