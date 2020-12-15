const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = () => {
    const app = express();

    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));

    app.use(express.static(__dirname + '/public'));


    // set the view engine to ejs
    app.set('view engine', 'ejs');
    // MIDDLEWARES
    app.use(bodyParser.json());
    require('../payment/routes/payment_routes')(app);
    return app;
};