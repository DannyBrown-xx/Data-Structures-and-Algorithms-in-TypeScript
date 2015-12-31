import IComparable from "./IComparable";

export default class Person implements IComparable<Person> {
    private _name:String;
    private _age:number;
    
    constructor(name:String, age:number) {
        this._name = name;
        this._age = age;
    }
    
    public get name() {
        return this._name;
    }
    
    public get age() {
        return this._age;
    }
    
    public Compare(other:Person):number {
        return 1;
    }
}