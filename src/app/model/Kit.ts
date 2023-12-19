export class Kit {
    id: number;
    tpe: number;
    sim: number;
    store: number;
    conso: number;

    constructor(id, tpe, sim, store, conso) {
        this.id = id;
        this.tpe = tpe;
        this.sim = sim;
        this.store = store;
        this.conso = conso;
    }
}
