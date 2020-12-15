module.exports = app => {
    const controller = require('../controllers/payment_controller')();

    app.route('/payment')
        .get(controller.payment_proc);
}