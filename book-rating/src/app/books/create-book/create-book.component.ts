import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  @Output()
  create = new EventEmitter<Book>();

  bookForm = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isInvalid(name: keyof Book): boolean {
    const control = this.bookForm.get(name);
    return control.touched && control.invalid;
  }

  hasError(name: keyof Book, code: string): boolean {
    const control = this.bookForm.get(name);
    return control.touched && control.hasError(code);
  }

  createBook(): void {

    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };
    // 1
    // debugger

    this.create.emit(newBook);

    // 3
    // debugger
    this.bookForm.reset();

  }

}
