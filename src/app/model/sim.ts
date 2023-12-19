export class Sim {
    id: any;
    imsi: string;
    phoneNumber: number | null;
    type: string;
    serviceProvider: string;
    subscription: string;
    tpe: string;

    constructor(id, imsi, surname, phoneNumber, type, serviceProvider, subscription, tpe) {
        this.id = id;
        this.imsi = imsi;
        this.phoneNumber = phoneNumber;
        this.type = type;
        this.serviceProvider = serviceProvider;
        this.subscription = subscription;
        this.tpe = tpe;
    }
}
