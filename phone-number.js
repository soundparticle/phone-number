class PhoneNumber {
    constructor(phone) {
        this.phone = phone;
    }
    
    number() {
        console.log('* in number() *', this.phone.replace(/[^\d]/g, ''));
        return this.phone.replace(/[^\d]/g, '');
    }
};

module.exports = {
    PhoneNumber
}
