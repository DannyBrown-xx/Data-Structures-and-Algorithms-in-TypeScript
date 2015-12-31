import Comparison from "./Comparison";

interface IComparable<T> {
    Compare(other:T):Comparison;
}

export default IComparable;