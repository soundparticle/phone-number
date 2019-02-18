class PhoneNumber {
    constructor(phone) {
        this.phone = phone;
    }
    
    number() {
        let cleaned = this.phone.replace(/[^\d]/g, '');
        if(cleaned.length === 9) return null;
        return cleaned;
        
        console.log('* in number() *', this.phone.length);   
    }
};

module.exports = {
    PhoneNumber
}
