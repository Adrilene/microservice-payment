const { response } = require('express');

module.exports = () => {
    const controller = {};

    controller.payment = (req, res) => {
        var today = new Date();
        var data = {
            due_date: `${today.getDate()+5}/${today.getMonth}/${today.getFullYear}`,
            date: `${today.getDate()}/${today.getMonth}/${today.getFullYear}`,
            value: req.query.value,
            name: req.query.name,
            cpf: req.query.cpf,
            address: req.query.address
        };
        res.render('pages/index', {
            data: data
        });
    };

    return controller;
}