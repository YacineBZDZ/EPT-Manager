export class Traceability {
    id: any;
    state: string;
    date: string;
    tpe: string;

    constructor(id, state, date, tpe) {
        this.id = id;
        this.state = state;
        this.date = date;
        this.tpe = tpe;
    }

}
