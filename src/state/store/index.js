import { createStore, createHook } from 'react-sweet-state';
import { initialState } from '../mocks';
import updateListName from '../actions/list-name';
import { nameSelector } from '../selectors'

export const Store = createStore({
  initialState,
  actions: {
    updateListName,
  },
  name: 'TasksStore'
});

export const useName = createHook(Store, {
  selector: nameSelector
});