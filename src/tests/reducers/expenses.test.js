import expensesReducer from '../../redux/reducers//expenses';
import {
	ADD_EXPENSE,
	REMOVE_EXPENSE,
	EDIT_EXPENSE
} from '../../redux/types/actionTypes';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('powinno ustawi default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('powinno remove expens by id', () => {
	const action = {
		type: REMOVE_EXPENSE,
		id: expenses[1].id
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});
test('powinno nie usuwac jezli nie znajdzie ID', () => {
	const action = {
		type: REMOVE_EXPENSE,
		id: '4'
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('powinno dodac  item do Expense tabeli', () => {
	const item = {
		description: 'samochod',
		note: 'ladny',
		amount: 195000,
		createdAt: 0
	};
	const action = {
		type: ADD_EXPENSE,
		expense: item
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, item]);
});
test('powinno edydowac item do Expense tabeli', () => {
 const amount = 122000;
	const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
     updates: { amount}
  };
  
	const state = expensesReducer(expenses, action);
	expect(state[1].amount).toBe(amount);
});


test('should not edit an expense if id not found', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
