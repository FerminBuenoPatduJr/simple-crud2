import { Injectable } from '@angular/core';
import { Book } from '../models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      name: 'Harry Potter 1',
      author: ['J.K. Rowling'],
      isbn: '1234566745',
    },
    {
      id: 2,
      name: 'Anna Karenina',
      author: ['Leo Tolstoy'],
      isbn: '1234356234',
    },
    {
      id: 3,
      name: 'Moby-Dick',
      author: ['Herman Merville'],
      isbn: '987345676',
    },
  ];

  getBooks() {
    return this.books;
  }

  constructor() {}
}
