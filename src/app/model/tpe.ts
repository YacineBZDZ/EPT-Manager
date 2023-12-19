export class Tpe {
    id: any;
    serialNumber: number;
    model: string;
    namePaymentProcessor: string;
    communicationMethod: string;

    constructor(id, serialNumber, model, namePaymentProcessor, communicationMethod) {
        this.id = id;
        this.serialNumber = serialNumber;
        this.model = model;
        this.namePaymentProcessor = namePaymentProcessor;
        this.communicationMethod = communicationMethod;
    }

}

//magazinier,bank,admin,support,installateur
