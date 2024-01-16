import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };
  // Shared Handler Function
    // const changeInputHandler = (identifier, value) => {
    //     if (identifier === 'title') {
    //         // Set the 'title' state to the new value
    //         setTitle(value);
    //     } else if (identifier === 'date') {
    //         // Set the 'date' state to the new value
    //         setDate(value); 
    //     } else {
    //         // Set the 'amount' state to the new value
    //         setAmount(value); 
    //     }
    // };
const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
        // id: Math.random().toString(),
        title: title,
        amount: +amount,
        date: new Date(date),
    }
    
    props.onSaveExpenseData(newExpense)
    //To reset the values again to blank
    setTitle('');
    setAmount('');
    setDate('');
};
return (
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input
            type='text'
            value={title}
            // onChange={(event) => {
            // changeInputHandler('title', event.target.value);
            // }}
            onChange={titleChangeHandler}
            />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input
            type='number'
            value={amount}
            min='1'
            // onChange={(event) => {
            // changeInputHandler('amount', event.target.value);
            // }}
            onChange={amountChangeHandler}
            />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input
            type='date'
            value={date}
            min='2020-01-01'
            max='2022-12-31'
            // onChange={(event) => {
            // changeInputHandler('date', event.target.value);
            // }}
            onChange={dateChangeHandler}
            />
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </div>
    </form>
    );
};

export default ExpenseForm;
