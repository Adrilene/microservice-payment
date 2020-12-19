function generate_due_date(date) {
    dueDay = date.getDate() + 5
    dueMonth = date.getMonth() + 1
    dueYear = date.getFullYear()
    monthsless31 = [4, 6, 9, 11]
    if (dueDay >= 31) {
        if (monthsless31.includes(dueMonth)) {
            dueDay -= 30
        } else if (dueMonth == 2) {
            dueDay -= 28
        } else {
            dueDay -= 31
        }
        if (dueMonth == 12) {
            dueYear += 1
            dueMonth = 1
        } else {
            dueMonth += 1
        }
    }
    return `${dueDay}/${dueMonth}/${dueYear}`
}

module.exports = {
    generate_due_date: generate_due_date
}