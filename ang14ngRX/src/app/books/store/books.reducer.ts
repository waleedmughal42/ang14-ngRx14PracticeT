// reducers basically pushes the data into the store and that data will be then accessed by the component

// export class BooksReducer {
// }
import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store'
import { Book } from './book'
import { booksFetchAPISuccess } from './books.action';

// creating initial state of the store 

export const initialState: ReadonlyArray<Book>=[];

export const bookReducer = createReducer(
    initialState,
    on(booksFetchAPISuccess,(state,{ allBooks })=> 
    {
        return allBooks;
    })
)
