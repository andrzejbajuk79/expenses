import selectExpenses from '../../redux/selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses'

test('should filter by text', () => {
  const filters = {
    text: 'u',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[0]]);
});

test('should filter by start date',()=> {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate:  moment(0),
    endDate: undefined
  };

  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([expenses[2],expenses[0]])

})


test('filtrowanie po dacie koncowej',()=> {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate:  undefined,
    endDate: moment(0).add(2,'days')
  };

  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([expenses[0],expenses[1]])
})

test ('filtrowanie po dacie RANGE',() => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate:  moment(-400),
    endDate: moment(400)
  };
  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([expenses[0]])
})

test( 'testowanie sortowania po dacie',()=>{
  const filters = {
    text: '',
    sortBy: 'date',
    startDate:  undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})

test('testowanie filtrowania po kwocie',()=> {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate:  undefined,
    endDate: undefined
  };
  const result =  selectExpenses(expenses,filters);
  expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
})