import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;
  isLoading = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    tap(() => this.isLoading = true),
    switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return of({
          isbn: '000',
          title: 'ERROR',
          description: error.message
        });
      })
    )),
    tap(() => this.isLoading = false),
  );

  constructor(private route: ActivatedRoute,
              private bs: BookStoreService) { }
}
