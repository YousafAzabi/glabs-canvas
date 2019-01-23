import notes from '../reducers/notes';

describe('Testing reducer "notes"', () => {
  describe('Testing ADD_NOTE case:', () => {
    test('Test to ADD a Note when array empty.', () => {
      const state = [];
      const action = {type: 'ADD_NOTE', id: 1, text: 'Test Message 1', page: 'ONE'};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'}
      ];
      expect(notes(state, action)).toEqual(expected);
    });

    test('Test to ADD a Note when array has elements.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'TWO'},
      ];
      const action = {type: 'ADD_NOTE', id: 3, text: 'Test Message 3', page: 'THREE'};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'TWO'},
        {id: 3, text: 'Test Message 3', page: 'THREE'}
      ];
      expect(notes(state, action)).toEqual(expected);
    });
  });

  describe('Testing DELETE_NOTE case:', () => {
    test('Test to DELETE a Note from middle of the list.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'TWO'},
        {id: 3, text: 'Test Message 3', page: 'THREE'}
      ];
      const action = {type: 'DELETE_NOTE', id: 2};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'THREE'}
      ];
      expect(notes(state, action)).toEqual(expected);
    });

    test('Test to DELETE a Note from end of the list.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'TWO'},
        {id: 3, text: 'Test Message 3', page: 'THREE'}
      ];
      const action = {type: 'DELETE_NOTE', id: 3};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'TWO'}
      ];
      expect(notes(state, action)).toEqual(expected);
    });

    test('Test to DELETE a Note from start of the list.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'TWO'},
        {id: 3, text: 'Test Message 3', page: 'THREE'}
      ];
      const action = {type: 'DELETE_NOTE', id: 1};
      const expected = [
        {id: 2, text: 'Test Message 2', page: 'TWO'},
        {id: 3, text: 'Test Message 3', page: 'THREE'}
      ];
      expect(notes(state, action)).toEqual(expected);
    });
  });

  describe('Testing MOVE_NOTE case:', () => {
    test('Test to MOVE a Note from page to another.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'TWO'},
        {id: 3, text: 'Test Message 3', page: 'THREE'}
      ];
      const action = {type: 'MOVE_NOTE', id: 2, page: 'ONE'};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'THREE'}
      ];
      expect(notes(state, action)).toEqual(expected);
    });
  });
});
