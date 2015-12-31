import Employee from '../Comparable/Employee';
import IComparable from '../Comparable/IComparable';
import Comparison from '../Comparable/Comparison';

class Tree<T extends IComparable<any>> {
    private _dataAsArray:T[];
    
    constructor(initialItems:T[]) {
        if(initialItems != null) {
            initialItems.forEach(element => {
                this.add(element);   
            });
        }
    }
    
    public add(item:T) {
        // Add root if its not set
        if(this._dataAsArray[0] == null) {
            this._dataAsArray[0] = item;
            return;
        }
        
        if(item.Compare(this._dataAsArray[0]) == Comparison.Equal) {
            
        }
    }
}

const employees = [new Employee("Danny", 22, 1), new Employee("Charlotte", 23, 2)];
let employeeHierachy = new Tree<Employee>(employees);