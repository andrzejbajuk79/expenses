import {
	setEndDate,
	setStartDate,
	setTextFilter,
	sortByDate,
  sortByAmount
} from '../../redux/actions/filters';
import {
	SET_END_DATE,
	SET_TEXT_FILTER,
	SET_START_DATE,
	SORT_BY_AMOUNT,
	SORT_BY_DATE
} from '../../redux/types/actionTypes';
import moment from 'moment';

test('Powinno wygenerowac Date Pocztkawa do filtrowania', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: SET_START_DATE,
		startDate: moment(0)
	});
});

test('Powinno wygenerowac Date koncoowa do filtrowania', () => {
	const action = setEndDate(moment(100));
	expect(action).toEqual({
		type: SET_END_DATE,
		endDate: moment(100)
	});
});

test('powinno filtrowac wg podanego tekstu', () => {
	const text = 'Something in';
	const action = setTextFilter(text);
	expect(action).toEqual({
		type: SET_TEXT_FILTER,
		text
	});
});

test('set generete text filter wit default', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: SET_TEXT_FILTER,
		text: ''
	});
});

test('should generete filter for date', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: SORT_BY_DATE
	});
});
test('should generete filter for date', () => {
  const action = sortByAmount();
	expect(action).toEqual({
		type: SORT_BY_AMOUNT
	});
});
