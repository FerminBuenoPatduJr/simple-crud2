import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book.interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() books:
    | {
        id: number;
        name: string;
        author: string[];
        isbn: string;
      }
    | undefined;
  @Output() actionEmitter = new EventEmitter<Book>();

  bookList: Book[] = [];

  constructor(private bookService: BookService) {}
  ngOnInit(): void {}
  button1() {
    this.actionEmitter.emit(this.books);
  }

  danger() {
    this.actionEmitter.emit(this.books);
  }

  getBooks() {
    this.bookList = this.bookService.getBooks();
  }
}
