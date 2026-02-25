// importer les modules
const { somme, produit, success, error } = require('./functions');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require('./config');

// déclarer le router
let CalculRouter = express.Router();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Route Somme
CalculRouter.route('/somme')
.post((req, res) => {

    let nb1 = req.body.n1;
    let nb2 = req.body.n2;

    if(!nb1 || !nb2){
        return res.json(error("Veuillez fournir n1 et n2"));
    }

    let r = somme(nb1, nb2);

    res.json(success("La somme de " + nb1 + " et " + nb2 + " est : " + r));
});


// Route Produit
CalculRouter.route('/produit')
.post((req, res) => {

    let nb1 = req.body.n1;
    let nb2 = req.body.n2;

    if(!nb1 || !nb2){
        return res.json(error("Veuillez fournir n1 et n2"));
    }

    let r = produit(nb1, nb2);

    res.json(success("Le produit de " + nb1 + " et " + nb2 + " est : " + r));
});


// route principale
app.use(config.rootAPI + 'calculs', CalculRouter);


// démarrer le serveur
// في الأخير فقط
module.exports = app;