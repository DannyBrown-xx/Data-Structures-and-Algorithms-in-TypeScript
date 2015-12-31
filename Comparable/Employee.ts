import Person from "./Person";

export default class Employee extends Person {
    private _paygrade:number;
    constructor(name:String, age:number, paygrade:number) {
        super(name, age);
        this._paygrade = paygrade;
    }
    
    public Compare():number {
        return this._paygrade;
    }
}