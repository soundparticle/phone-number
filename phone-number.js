class PhoneNumber {
    constructor(phone) {
        this.phone = phone;
    }
    
    number() {
        let cleaned = this.phone.replace(/[^\d]/g, '');
        let firstNum = cleaned.substring(1).charAt(0);
        let fourthNum = cleaned.substring(1).charAt(3);
        
        if(cleaned.length === 11 && cleaned.startsWith('1')) {
            return ((firstNum < 2 || fourthNum < 2) ? null : cleaned.substring(1));
        }

        if(cleaned.length !== 10) 
        return null;
        
        return ((cleaned.startsWith('0') || cleaned.startsWith('1') || cleaned.startsWith('0', 3) || cleaned.startsWith('1', 3)) ? null : cleaned);
    }
};

module.exports = {
    PhoneNumber
}
