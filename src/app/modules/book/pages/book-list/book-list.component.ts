import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: {
    id: number;
    name: string;
    authors: string[];
    isbn: string;

  }[] = [];

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }
  ngOnInit(): void {}

  executeAction(books: Book) {
    console.log(books.id);
  }
}
