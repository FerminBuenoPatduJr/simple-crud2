import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  
  bookList: Book[]=[];
  constructor(private bookService: BookService) { }
  ngOnInit(): void {
  }

  getBooks(){
    this.bookList = this.bookService.getBooks()
  }

}
