'use strict';

// dom
const {section, hr, h2, button, span, ul, li, p} = require('iblokz-snabbdom-helpers');
// components

const income = [
	{
		title: 'Consultation',
		amount: 500,
		currency: 'BGN'
	}
];

const expenses = [
	{
		title: 'Loan Payment',
		amount: 175,
		currency: 'BGN'
	},
	{
		title: 'Phone',
		amount: 10,
		currency: 'BGN'
	},
	{
		title: 'Net',
		amount: 25,
		currency: 'BGN'
	},
	{
		title: 'Allowance',
		amount: 200,
		currency: 'BGN'
	}
];

const totalOf = (arr, prop) => arr.reduce((total, el) => total + el[prop], 0);

module.exports = ({state, actions}) => section('#ui', [
	// Income/Expenses
	section('#inc-exp', [
		section('#income', [
			h2('Income'),
			ul(income.map(src =>
				li([src.title, span('.right', src.amount)])
			)),
			hr(),
			section([
				'Total:',
				span('.right.bold', totalOf(income, 'amount'))
			])
		]),
		section('#expenses', [
			h2('Expenses'),
			ul(expenses.map(exp =>
				li([exp.title, span('.right', exp.amount)])
			)),
			hr(),
			section([
				'Total:',
				span('.right.bold', totalOf(expenses, 'amount'))
			])
		]),
		section('#statement', [
			h2('Statement'),
			p([
				'Passive Income',
				span('.right.bold', 0)
			]),
			p([
				'Cashflow',
				span('.right.bold', totalOf(income, 'amount') - totalOf(expenses, 'amount'))
			])
		])
	]),
	// Balance Sheet
	section('#balance')
]);
