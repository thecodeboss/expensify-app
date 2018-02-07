import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseDashboardPage } from '../../components/ExpenseDashboardPage.js';
import expenses from '../fixtures/expenses';

test('should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseDashboardPage correctly with 1 expense', () => {
  const wrapper = shallow(<ExpenseDashboardPage expenses={[expenses[0]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseDashboardPage correctly with more than 1 expense', () => {
  const wrapper = shallow(<ExpenseDashboardPage expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
