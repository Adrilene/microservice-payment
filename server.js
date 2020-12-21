// load the things we need
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const cors = require('cors')


app.use(express.static(__dirname + '/public'));
app.use(cors());


app.set('view engine', 'ejs');
// MIDDLEWARES
app.use(bodyParser.json());

app.get('/payment', function(req, res) {

    var today = new Date();
    console.log(today.getMonth())
    var generate_due = require('./util/generate_due')
    var data = {
        due_date: generate_due.generate_due_date(today),
        date: `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`,
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


app.listen(4001, () => {
    console.log(`Servidor rodando na porta 4001`)
});