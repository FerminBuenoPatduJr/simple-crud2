import { Injectable } from '@angular/core';
import { Book } from '../models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[]=[
    {
      id: 1,
      name: "Harry Potter 1",
      authors: ["J.K, Rowling"],
      isbn: "12345667"
    },
  {
      id: 2,
      name: "Harry Potter 2",
      authors: ["J.K, Rowling"],
      isbn: "1234356"
    },
  {
      id: 3,
      name: "Harry Potter 3",
      authors: ["J.K, Rowling"],
      isbn: "132435465"
    }
  ];

  getBooks(){
    return this.books
  }

  constructor() { }
}
