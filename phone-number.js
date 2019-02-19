class PhoneNumber {
    constructor(phone) {
        this.phone = phone;
    }
    
    number() {
        let cleaned = this.phone.replace(/[^\d]/g, '');
        // let onlyNums = /^\d+$/.test(cleaned);
        // console.log('* in number() *', noLetters);   
        if(cleaned.length === 9) return null;
        else if(cleaned.length === 11 && cleaned.startsWith('2')) return null;
        else if(cleaned.length === 11 && cleaned.startsWith('1')) return cleaned.substring(1);
        else if(cleaned.length === 12) return null;
        // else if(/^\d+$/.test(cleaned) === false) 
            // console.log('* in number() *', /[a-z]/i.test(cleaned));   
        // return null;
        
        // console.log('* in number() *', this.phone.length);   
        return cleaned;
        
    }
};

module.exports = {
    PhoneNumber
}
