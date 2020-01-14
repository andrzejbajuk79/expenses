import moment from 'moment';
export default [
	{
		id: '1',
		description: 'Gum1',
		note: '',
		amount: 195,
		createdAt: 0
	},
	{
		id: '2',
		description: 'Rent2',
		note: '',
		amount: 109500,
		// createdAt:-1000

		//subtract
		createdAt: moment(0)
			.subtract(4, 'days')
			.valueOf()
	},
	{
		id: '3',
		description: 'Credit Card3',
		note: '',
		amount: 4500,
		// createdAt:1000
		createdAt: moment(0)
			.add(4, 'days')
			.valueOf()
	}
];
