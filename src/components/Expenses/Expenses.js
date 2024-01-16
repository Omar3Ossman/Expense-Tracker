import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import React , {useState} from 'react';
import ExpenseList from './ExpenseList';

function Expenses(props){
const [filterYear,setFilterYear] = useState('2020');
const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
};
const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
});
    return (
    <div>
        <Card className="expenses">
        <ExpensesFilter 
        selected={filterYear} 
        onChangeFilter={filterChangeHandler}  
        /> 
        <ExpenseList items = {filteredExpenses}/> 
        </Card>
    </div>
    )
}
export default Expenses;