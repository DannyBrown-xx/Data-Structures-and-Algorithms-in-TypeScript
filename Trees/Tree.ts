import Employee from '../Comparable/Employee';

class Tree<T> {
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
        
        //        
    }
}

const employees = [new Employee("Danny", 22, 1), new Employee("Charlotte", 23, 2)];
let employeeHierachy = new Tree<Employee>(employees);