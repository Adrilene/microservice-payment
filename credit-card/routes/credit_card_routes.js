module.exports = app => {
    const controller = require('../controllers/credit_card_controller')();

    app.route('/payment')
        .get(controller.payment_proc);
}