export class AccountDetails { 
    accNumber: number;
    holderName: string;
    accType: string;
    amount: number;
    contact: number;

    constructor(accNumber: number, holderName: string, accType: string, amount: number,contact: number)
    {
        this.accNumber = accNumber;
        this.holderName = holderName;
        this.accType = accType;
        this.amount = amount;
        this.contact = contact;
    }
}