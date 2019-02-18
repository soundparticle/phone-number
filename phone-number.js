class PhoneNumber {
    
    constructor(phone) {
        this.phone = phone;
    }
    
    number() {
        console.log('* in number() *', this.phone.replace(/[^\d]/g, ''));
        return this.phone;
    }
    
};
// console.log('* return *', this.phone);
// console.log('* return *', phone.number());

module.exports = {
    PhoneNumber
}
