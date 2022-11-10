// export class BooksEffects {
    // }

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { DataService } from "../data.service";
import { booksFetchAPISuccess, invokeBooksAPI } from "./books.action";

@Injectable()
export class BooksEffects 
{
    constructor(private actions$: Actions,private oDataService: DataService){}

    loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
        ofType(invokeBooksAPI),
        switchMap(() => {
            return this.oDataService
            .get()
            .pipe(map((data)=> booksFetchAPISuccess({allBooks: data})))
        })
        )
    )
    
}