import { render, screen } from '@testing-library/react';
import BusybeeTestResultsComponent from '../src';
import resultJson from './test-suite-result.json';

describe('BusybeeTestResultsComponent', () => {
    it('renders all test suite names', () => {
        render(<BusybeeTestResultsComponent results={resultJson} />);
        // appears in both the dropdown and as the active suite heading
        screen.getAllByText('REST TestSuite');
        screen.getAllByText('USER_PROVIDED TestSuite');
    });

    it('shows the first test suite by default', () => {
        render(<BusybeeTestResultsComponent results={resultJson} />);
        screen.getByRole('heading', { name: 'REST TestSuite' });
    });

    it('shows the pass rate for the active suite', () => {
        render(<BusybeeTestResultsComponent results={resultJson} />);
        screen.getByText(/4\/6 Tests Passing \(67%\)/);
    });

    it('renders a row for each test set', () => {
        render(<BusybeeTestResultsComponent results={resultJson} />);
        // REST TestSuite has two ts1 and two ts2 test sets
        expect(screen.getAllByText('ts1').length).toBe(2);
        expect(screen.getAllByText('ts2').length).toBe(2);
    });
});
