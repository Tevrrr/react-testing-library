/** @format */
import { getCounterValue} from './getCounterValue'
describe('getCounterValue ', () => {
	test('test with empty state', () => {
		expect(getCounterValue({})).toBe(0);
    });
    test('test with filled state', () => {
		expect(getCounterValue({counter: { value: 100}})).toBe(100);
	});
});
