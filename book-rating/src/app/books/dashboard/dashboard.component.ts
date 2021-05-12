import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Book } from '../shared/book';
import { selectBookByIsbn, selectBooks, selectBooksLoading } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  loading$ = this.store.pipe(select(selectBooksLoading));
  books$ = this.store.pipe(select(selectBooks));

  // beispiel
  book42$ = this.store.pipe(select(selectBookByIsbn, { isbn: 42 }));

  constructor(private store: Store) {
    // bs.getAllBooks().subscribe(books => (this.books = books));
  }

  doRateDown(book: Book): void {
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSort(ratedBook);
  }

  doRateUp(book: Book): void {
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: book.rating < 5 ? book.rating + 1 : 5
    // // };

    // this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    // this.books = this.books
    //   .map(b => (b.isbn === ratedBook.isbn ? ratedBook : b))
    //   .sort((a, b) => b.rating - a.rating);
  }

  addBook(newBook: Book): void {
    // // 2
    // // debugger
    // this.books = [...this.books, newBook];
  }
}
