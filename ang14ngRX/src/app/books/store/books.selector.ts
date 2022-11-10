// export class BooksSelector {
    // }


// it is for fetching and reading the data

import { createFeatureSelector } from "@ngrx/store";
import { Book } from "./book";

export const selectBooks= createFeatureSelector<Book[]>("myBooks")
