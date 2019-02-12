import notes from '../reducers/notes';

describe('Testing reducer "notes"', () => {
  describe('Testing ADD_NOTE case', () => {
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

  describe('Testing DELETE_NOTE case', () => {
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

  describe('Testing MOVE_NOTE case', () => {
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

    test('Test to cancel MOVE a Note pop-up form, note stay in same page.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'TWO'},
        {id: 3, text: 'Test Message 3', page: 'THREE'}
      ];
      const action = {type: 'MOVE_NOTE', id: 2, page: null};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'TWO'},
        {id: 3, text: 'Test Message 3', page: 'THREE'}
      ];
      expect(notes(state, action)).toEqual(expected);
    });
  });

  describe('Testing MOVE_UP case', () => {
    test('Test to MOVE a Note from middle one position UP.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'ONE'}
      ];
      const action = {type: 'MOVE_UP', id: 2, page: 'ONE'};
      const expected = [
        {id: 2, text: 'Test Message 2', page: 'ONE'},
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'ONE'}
      ];
      expect(notes(state, action)).toEqual(expected);
    });

    test('Test to MOVE upper Note UP.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'ONE'}
      ];
      const action = {type: 'MOVE_UP', id: 1, page: 'ONE'};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'ONE'}
      ];
      expect(notes(state, action)).toEqual(expected);
    });
  });

  describe('Testing MOVE_DOWN case', () => {
    test('Test to MOVE a Note from middle one position DOWN.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'ONE'}
      ];
      const action = {type: 'MOVE_DOWN', id: 2, page: 'ONE'};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'ONE'}
      ];
      expect(notes(state, action)).toEqual(expected);
    });

    test('Test to MOVE lower Note DOWN.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'ONE'}
      ];
      const action = {type: 'MOVE_DOWN', id: 3, page: 'ONE'};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 2, text: 'Test Message 2', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'ONE'}
      ];
      expect(notes(state, action)).toEqual(expected);
    });
  });

  describe('Testing DRAG_DROP case', () => {
    test('Test to DRAG a Note and DROP it in new position.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 5, text: 'Test Message 5', page: 'ONE'},
        {id: 7, text: 'Test Message 7', page: 'ONE'},
        {id: 4, text: 'Test Message 4', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'ONE'}
      ];
      const action = {type: 'DRAG_DROP', oldIndex: 2, newIndex: 4, page: 'ONE'};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 5, text: 'Test Message 5', page: 'ONE'},
        {id: 4, text: 'Test Message 4', page: 'ONE'},
        {id: 3, text: 'Test Message 3', page: 'ONE'},
        {id: 7, text: 'Test Message 7', page: 'ONE'},
      ];
      expect(notes(state, action)).toEqual(expected);
    });

    test('Test to DRAG a Note and DROP it at same position.', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 5, text: 'Test Message 5', page: 'ONE'},
        {id: 7, text: 'Test Message 7', page: 'ONE'},
      ];
      const action = {type: 'DRAG_DROP', oldIndex: 1, newIndex: 1, page: 'ONE'};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 5, text: 'Test Message 5', page: 'ONE'},
        {id: 7, text: 'Test Message 7', page: 'ONE'},
      ];
      expect(notes(state, action)).toEqual(expected);
    });
  });

  describe('Testing EDIT_NOTE case', () => {
    test('Test to EDIT text of a Note', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 5, text: 'Test Message 5', page: 'ONE'},
        {id: 7, text: 'Test Message 7', page: 'ONE'},
      ];
      const action = {type: 'EDIT_NOTE', id: 5, text: 'Note is edited'};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 5, text: 'Note is edited', page: 'ONE'},
        {id: 7, text: 'Test Message 7', page: 'ONE'},
      ];
      expect(notes(state, action)).toEqual(expected);
    });

    test('Test to cancel EDIT form', () => {
      const state = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 5, text: 'Test Message 5', page: 'ONE'},
        {id: 7, text: 'Test Message 7', page: 'ONE'},
      ];
      const action = {type: 'EDIT_NOTE', id: 5, text: null};
      const expected = [
        {id: 1, text: 'Test Message 1', page: 'ONE'},
        {id: 5, text: 'Test Message 5', page: 'ONE'},
        {id: 7, text: 'Test Message 7', page: 'ONE'},
      ];
      expect(notes(state, action)).toEqual(expected);
    });
  });

});
