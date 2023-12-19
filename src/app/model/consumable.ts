export class Consumable {
    id: any;
    productName: string;
    brandName: string;
    supplierInformation: string;
    quantity: number;
    category: string;
    cost: number;

    constructor(id, productName, brandName, supplierInformation, quantity, category, cost) {
        this.id = id;
        this.productName = productName;
        this.brandName = brandName;
        this.supplierInformation = supplierInformation;
        this.quantity = quantity;
        this.category = category;
        this.cost = cost;
    }
}
