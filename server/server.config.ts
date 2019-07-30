const http = require('http');
const fs = require('fs');
const PORT = 3516;
const serveur = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', function (err, data) {
            res.writeHead(200, { 'content-type': 'text/html' });
            err ? console.log(err) : res.end(data);
        });

    }
    if (req.url === '/async.js') {
        fs.readFile('./async.js', (err, data) => {
            err ? console.log(err) : res.end(data);
        });
    }
})

serveur.listen(PORT, function () {
    console.log(`Serveur écoute sur ${PORT}`);
});

