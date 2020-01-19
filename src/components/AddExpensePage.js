import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../redux/actions/expenses';

const AddExpensePage = props => (
	<div>
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title"> Dodaj Expense</h1>
			</div>
		</div>
		<div className="content-container">
			{' '}
			<ExpenseForm
				onSubmit={expense => {
					props.dispatch(addExpense(expense))
			
				}}
			/>
		</div>
	</div>
);

export default connect()(AddExpensePage);
