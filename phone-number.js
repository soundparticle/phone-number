class PhoneNumber {
    constructor(phone) {
        this.phone = phone;
    }
    
    number() {
        let cleaned = this.phone.replace(/[^\d]/g, '');
     
        if(cleaned.length === 9) return null;
        else if(cleaned.length === 11 && cleaned.startsWith('2')) return null;
        else if(cleaned.length === 11 && cleaned.startsWith('1')) return cleaned.substring(1);
        else if(cleaned.length === 12) return null;
        // else if(/[a-z]/i.test(cleaned) === true) return null;
        else if(cleaned.length !== 10) return null;
        else if(cleaned.startsWith('0') || cleaned.startsWith('1')) return null;
        console.log('* cleaned *', cleaned);   
        console.log('* in number() *', /[a-z]/i.test(cleaned));   
        return cleaned;
        
        // console.log('* in number() *', this.phone.length);           
    }
};

module.exports = {
    PhoneNumber
}
