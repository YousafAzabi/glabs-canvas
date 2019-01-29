import selectedPage from '../reducers/selectedPage';

describe('Testing reducer "selectedPage"', () => {
  describe('Testing CHOOSE_PAGE case:', () => {
    test('Test to CHANGE viewed page.', () => {
      const state = 'ONE';
      const action = {type: 'CHOOSE_PAGE', number: 'TWO'};
      const expected = 'TWO';
      expect(selectedPage(state, action)).toEqual(expected);
    });

    test('Test default case.', () => {
      const state = 'ONE';
      const action = {type: 'DEFAULT', number: 'TWO'};
      const expected = state;
      expect(selectedPage(state, action)).toEqual(expected);
    });
  });
});
