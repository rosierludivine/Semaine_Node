// Exercice 3 

const fs = require('fs');
const http = require('http');

http.createServer((httpRequest, httpResponse) => {//creation du serveur 
console.log('request', httpRequest);
    fs.readFile('text.txt', 'utf-8',(err, data) => {// Avoir acces au fichier
        if (err){
            console.log(err)

            httpResponse.statusCode =500; // gérer nous meme le code dpour lerreur 
            httpResponse.end('an error has occured');
            return; 
        }

        httpResponse.setHeader('Content-Type', 'text/plain');
        httpResponse.end(data);
    })
}).listen(3000, () => {
    console.log('server web listening on port 3000')//validation de la bonne fonctionnalité
});