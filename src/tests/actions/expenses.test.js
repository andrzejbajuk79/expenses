import {
	addExpense,
	removeExpense,
	editExpense
} from '../../redux/actions/expenses';
import {
	SET_END_DATE,
	SET_TEXT_FILTER,
	SET_START_DATE,
	SORT_BY_AMOUNT,
	SORT_BY_DATE,
	ADD_EXPENSE,
	REMOVE_EXPENSE,
	EDIT_EXPENSE
} from '../../redux/types/actionTypes';

test('powinno usunac pozycje-wydatek', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: REMOVE_EXPENSE,
		id: '123abc'
	});
});

//testowanie EDIT
test('edycja -test', () => {
	const id = '123abc';
	const updates={ note: 'new note' };
	const action = editExpense(id, updates);
	expect(action).toEqual({
		type: EDIT_EXPENSE,
		id: '123abc',
		updates: {
			note: 'new note'
		}
	});
});

//ADD Expense
test('Powinnino dodac pozycje z dostarczonymi parametrami', () => {
	const test = {
		description: 'rent',
		amount: 100,
		createdAt: 1000,
		note: 'opalata za wynajem'
	};
	const action = addExpense(test);
	expect(action).toEqual({
		type: ADD_EXPENSE,
		expense: {
			...test,
			id: expect.any(String)
		}
	});
});

test('Powinnino dodac pozycje z  parametrami DEFAULT', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: ADD_EXPENSE,
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	});
});
