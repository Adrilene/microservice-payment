var credit_cards = require('../../data/credit_cards.json')
credit_cards = credit_cards['credit_cards']['data']
function check_balance(number, value){
    
    for (var i = 0; i<credit_cards.length; i++){
        if (credit_cards[i]['number'] == number) {
            if (value <= credit_cards[i]['balance']) return true;
        }
    }
    return false;
}

function check_card_exists(number, cvv){
    for (var i = 0; i<credit_cards.length; i++){
        if (credit_cards[i]['number'] == number) {
            if (cvv == credit_cards[i]['cvv']) return [true, 'ok'];
            else return [false, 'Invalid CVV'];
        }
    }
    return [false, 'Nonexistent Card'];
}

module.exports = {
    check_balance: check_balance,
    check_card_exists: check_card_exists
}