export class Store {
    id: any;
    storeName: string;
    storeAddress: string;
    storeCategories: string;

    constructor(id, storeName, storeAddress, storeCategories) {
        this.id = id;
        this.storeName = storeName;
        this.storeAddress = storeAddress;
        this.storeCategories = storeCategories;
    }
}
