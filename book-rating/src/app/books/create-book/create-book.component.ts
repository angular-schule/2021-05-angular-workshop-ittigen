import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

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

    /// Hands On:
    /// 1. Erstelle ein Event mit dem Namen 'create'
    /// 2. Emitiere das Event zusammen mit 'newBook'
    /// 3. Subscribe dich im Dashboard auf das Ereignis
    /// 4. Füge das Buch dem Buch-Array hinzu

    this.bookForm.reset();

  }

}
