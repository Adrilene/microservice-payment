const { response } = require('express');

module.exports = () => {
    var payment = require('../services/credit_card_services');
    const controller = {};

    controller.payment_proc = (req, res) => {
        var validate = payment.validate_card(req.query.number, req.query.value, req.query.cvv);
        if (!validate[0]){
            res.status(400).json(validation[1]);
        }
        else{
            res.status(200).json(payment.update_info(req.query.number, req.query.value));
        }
    };
    
    return controller;
}