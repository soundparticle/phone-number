class PhoneNumber {
    constructor(phone) {
        this.phone = phone;
    }
    
    number() {
        let cleaned = this.phone.replace(/[^\d]/g, '');
        // console.log('* in number() *', ((cleaned.substring(1).startsWith('0', 1) || cleaned.substring(1).startsWith('1', 1) || cleaned.substring(1).startsWith('2', 1)) === true));   
        // console.log('* substring  starts *', cleaned.substring(1).startsWith('0') || cleaned.substring(1).startsWith('1') || cleaned.substring(1).startsWith('2'));
        console.log('* cleaned *', cleaned);   
        console.log('* substring  starts *', cleaned.startsWith('0', 1));
        // if(cleaned.length === 9) return null;
        
        // else if(cleaned.length === 11 && cleaned.startsWith('2'))
        // return null;

        if(cleaned.length === 11 && cleaned.startsWith('1'))
        return cleaned.substring(1);
        
        
        // else if(cleaned.length === 12) return null;
        
        // else if(/[a-z]/i.test(cleaned) === true) return null;
        
        if(cleaned.length !== 10) return null;
        
        else if(cleaned.startsWith('0') || cleaned.startsWith('1'))
        return null;
        
        else if(cleaned.startsWith('0', 3) || cleaned.startsWith('1', 3))
        return null;
        
        else if(cleaned.startsWith('0', 1) || cleaned.startsWith('1', 1) || cleaned.startsWith('0', 4) || cleaned.startsWith('1', 4))
        return null;
        
        else return cleaned;
    }
};

module.exports = {
    PhoneNumber
}
