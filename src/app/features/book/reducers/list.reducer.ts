
import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/list.actions';


export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface ListState extends EntityState<BookEntity> {

}

export const initialListState: ListState = {
  ids: ['X001'],
  entities: {
    X001: {
      id: 'X001',
      title: 'who knows',
      author: 'I tomins',
      format: 'Hardcopy'
    }
  }
};

export const adapter = createEntityAdapter<BookEntity>();

export const reducer = createReducer(
  initialListState,
  on(actions.bookAddedToList, (state, { entity }) => adapter.addOne(entity, state))
);
