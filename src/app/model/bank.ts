export class Bank {
    id: any;
    bankName: string;
    agencyAddress: string;
    phoneNumber: number | null;
    bankEmail: string;
    serviceOffered: string;

    constructor(id, bankName, agencyAddress, phoneNumber, type, bankEmail, serviceOffered) {
        this.id = id;
        this.bankName = bankName;
        this.agencyAddress = agencyAddress;
        this.phoneNumber = phoneNumber;
        this.bankEmail = bankEmail;
        this.serviceOffered = serviceOffered;
    }
}
