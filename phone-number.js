class PhoneNumber {
    constructor(phone) {
        this.phone = phone;
    }
    
    number() {
        let cleaned = this.phone.replace(/[^\d]/g, '');
        let firstNum = cleaned.substring(1).charAt(0);
        let fourthNum = cleaned.substring(1).charAt(3);
        
        console.log('* cleaned *', cleaned.substring(1)); 
        console.log('firstNum', firstNum);  
        console.log('fourthdNum', fourthNum);  
        
        if(cleaned.length === 9)
        return null;
        
        else if(cleaned.length === 11 && cleaned.startsWith('2'))
        return null;

        else if(cleaned.length === 11 && cleaned.startsWith('1')) {
            if (firstNum < 2 || fourthNum < 2)
            return null;
            
            else return cleaned.substring(1);
        }

        else if(firstNum < 2 || fourthNum < 2)
        return null;
        
        else if(cleaned.length === 12)
        return null;        
        
        if(cleaned.length !== 10) 
        return null;
        
        else if(cleaned.startsWith('0') || cleaned.startsWith('1'))
        return null;
        
        else if(cleaned.startsWith('0', 3) || cleaned.startsWith('1', 3))
        return null;
   
        else if (firstNum < 2 || fourthNum < 2)
        return null;

        else return cleaned;
    }
};

module.exports = {
    PhoneNumber
}
