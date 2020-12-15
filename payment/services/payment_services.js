const validation = require('./validations')

function validate_card(number, value, cvv){
    var exist = validation.check_card_exists(number, cvv) 
    if (exist[0]){
        if (validation.check_balance(number, value)) return [true, 'ok']
        else return [false, 'Value not available']
    }
    else return exist
}

function update_info(number, value){
    const fs = require('fs');
    //let rawdata = fs.readFileSync('../../data/credit_cards.json');
    let credit_cards = require('../../data/credit_cards.json');
    
    for(var i = 0; i<credit_cards['credit_cards']['data'].length; i++){
        if (credit_cards['credit_cards']['data'][i]['number'] == number) {
            credit_cards['credit_cards']['data'][i]['balance'] -= value;
            break;
        }
    }

    let data = JSON.stringify(credit_cards, null, 4);
    fs.writeFileSync('data/credit_cards.json', data);

    return 'ok'
}

module.exports = {
    validate_card: validate_card,
    update_info: update_info
}