import { createAction, props } from '@ngrx/store';

let currentTempId = 0;

export const bookAddedToList = createAction(
  '[books/list] added',
  (
    { title, author, format }: { title: string, author: string, format: string }) => ({

      entity: {
        id: 'TEMP-' + currentTempId++,
        title,
        author,
        format
      }

    }));
