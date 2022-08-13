
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog.interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent implements OnInit {
  @Input() blogItem: Blog | undefined;
  @Output() actionEmitter = new EventEmitter<Blog>();
  blogList: Blog[] | undefined;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {}

  getBlogs() {
    this.blogList = this.blogService.getBlogs();
  }
}

// function button1() {
//   throw new Error('Function not implemented.');
// }

// function danger() {
//   throw new Error('Function not implemented.');
// }
