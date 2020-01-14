import filtersReducer from '../../redux/reducers/filters';
import {
	SET_TEXT_FILTER,
	SET_START_DATE,
	SORT_BY_AMOUNT,
	SORT_BY_DATE,
} from '../../redux/types/actionTypes';
import moment from 'moment';

test('powinno set up default  filter valuea', () => {
	//current state = undefined
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('powinno set sortby to Amount', () => {
	const state = filtersReducer(undefined, { type: SORT_BY_AMOUNT });
	expect(state.sortBy).toBe('amount');
});

test('powinno set sortBy to date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	};
	const action = { type: SORT_BY_DATE };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

test('powinno ustawic textFilter', () => {
	const tekst = 'his is my filtert';
	const action = { type: SET_TEXT_FILTER, text: tekst };
	const state = filtersReducer(undefined, action);
	expect(state.text).toBe('his is my filtert');
});

test('powinno ustawic startDate filter', () => {
	const startDate= moment();
	const action = { type:SET_START_DATE, startDate};
	const state = filtersReducer(undefined, action);
	expect(state.startDate).toEqual(startDate);
});


