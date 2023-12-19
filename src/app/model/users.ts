export class Users {
    id: any;
    name: string;
    surname: string;
    phoneNumber: number | null;
    email: string;
    address: string;
    typeUserStr: string;
    password: string;
    currentpassword: string;
    confirmPassword: string;

    constructor(id, name, surname, phoneNumber, email, address, typeuserstr, password, currentpassword, confirmpassword) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.typeUserStr = typeuserstr;
        this.password = password;
        this.currentpassword = currentpassword
        this.confirmPassword = confirmpassword;
    }
}
