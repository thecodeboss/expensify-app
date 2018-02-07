import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseDashboardPage = ({expenses = [], filters}) => (
  <div>
    <ExpenseListFilters />
    {
      expenses.length > 0 &&
      <p>
        Viewing {expenses.length} {expenses.length > 1 ? "expenses " : "expense "}
        totalling {numeral(selectExpensesTotal(expenses) / 100).format('$0,0.00')}.
      </p>
    }
    <ExpenseList />
  </div>
);

const mapStateToProps = ({expenses, filters}) => ({
  expenses: selectExpenses(expenses, filters)
});

export default connect(mapStateToProps)(ExpenseDashboardPage);
