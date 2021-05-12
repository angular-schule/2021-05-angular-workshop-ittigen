import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {
  @Output()
  rateDown = new EventEmitter<Book>();

  @Output()
  rateUp = new EventEmitter<Book>();

  @Input()
  book: Book;

  @Input()
  isRateDownEnabled = (book: Book) => true;

  @Input()
  isRateUpEnabled = (book: Book) => true;

  doRateDown(): void {
    this.rateDown.next(this.book);
  }

  doRateUp(): void {
    this.rateUp.next(this.book);
  }

  log() {
    // console.log('CD getriggert', Date.now());
  }
}
