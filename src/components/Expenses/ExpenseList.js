import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
    let expensesContent = null;

    if (props.items.length !== 0) {
        expensesContent = props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div className="expenses-list">
            {expensesContent}
        </div>
    );
};


export default ExpenseList;
