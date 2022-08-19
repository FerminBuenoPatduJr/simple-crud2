import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.interface';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs: // {
  //   id: number;
  //   title: string;
  //   description: string;
  //   author: string;
  //   comments: string[];
  // }
  Blog[] = [];

  constructor(private blogService: BlogService) {
    this.blogs = this.blogService.getBlogs();
  }
  ngOnInit(): void {}
  executeEdit(blog: Blog) {
    console.log(blog.id);
  }

  executeDelete(blog: Blog) {
    console.log(blog.id);
  }

  executeAction(blog: Blog) {
    console.log(blog.id);
  }
}
