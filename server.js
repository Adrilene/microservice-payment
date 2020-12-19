// load the things we need
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');
// MIDDLEWARES
app.use(bodyParser.json());

app.get('/payment', function(req, res) {

    var today = new Date();
    var data = {
        due_date: `${today.getDate()+5}/${today.getMonth()}/${today.getFullYear()}`,
        date: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
        value: `R$ ${parseFloat(req.query.value).toFixed(2)}`,
        name: req.query.name,
        cpf: req.query.cpf,
        address: req.query.address
    }

    var data_to_insert = {
        method: 'bank slip',
        purchase_value: data['value'],
        client: data['cpf'],
        date: data['date']
    }

    db.insert(data_to_insert)

    res.render('pages/index', {
        data: data
    });
});


app.listen(4243, () => {
    console.log(`Servidor rodando na porta 4243`)
});