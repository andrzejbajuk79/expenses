import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('shoul render Form correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render form z prawidlowymi wartosciami w trybie edycji', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});
