import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, mergeMap, share, shareReplay, switchMap } from 'rxjs/operators';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn)),
    shareReplay(1)
  );

  constructor(private route: ActivatedRoute,
              private bs: BookStoreService) { }
}
