//Importer le module 'mysql' de nodeJS
let mSQL = require('mysql');
let user = 'root';
let host = 'localhost';
const BDD = {
    host: host,
    user: user,
    password: '',
    database: 'pet'

}

//Creation de la connexion entre la BDD et mon app.
let con = mSQL.createConnection(BDD);
let requete = "SELECT * FROM BIO where id_bio = 1";
//Etablir la connexion
con.connect(err => err ? console.log(err) : console.log("connecté à la DB"));

con.query(requete, (err, result)=>{
    err? console.log(err): console.log(result);

});