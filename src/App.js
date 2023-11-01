import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';


const App = () => {
  return (
    <AppProvider>
     <div className= 'container'>
      <h2 className= 'mt-5'>October 2023 Budget Planner</h2>
      <div className= 'row mt-3'>
        <div className='col-sm'>
          <Budget/>
        </div>
        <div className='col-sm'>
          <ExpenseTotal/>
        </div>
        <div className='col-sm'>
          <Remaining/>
        </div>
        </div>
      <h4 className='mt-3'>Expenses</h4>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList/>
        </div>
      </div>
      <h4 className='mt-3'>Add Expense</h4>
      <div className='mt-3'>
        <div className='col-sm'>
          <AddExpenseForm/>
        </div>
      </div>
    </div>
  </AppProvider>
  );
};

export default App;
