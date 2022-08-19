import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog.interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent implements OnInit {
  @Input() blog:
    | {
        id: number;
        title: string;
        description: string;
        author: string;
        comments: string[];
      }
    | undefined;
  @Output() actionEmitter = new EventEmitter<Blog>();
  blogList: Blog[] = [];
  @Output() editEmitter = new EventEmitter<Blog>();
  @Output() deleteEmitter = new EventEmitter<Blog>();

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {}

  edit() {
    this.actionEmitter.emit(this.blog);
  }

  danger() {
    this.actionEmitter.emit(this.blog);
  }
  getBlogs() {
    this.blogList = this.blogService.getBlogs();
  }
}
