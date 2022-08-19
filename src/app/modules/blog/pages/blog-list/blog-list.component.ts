import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.interface';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BlogService } from '../../services/blog.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs: {
    id: number;
    title: string;
    description: string;
    author: string;
    comments: string[];
  }[] = [];

  constructor(private blogService: BlogService) {
    this.blogs = this.blogService.getBlogs();
  }
  ngOnInit(): void {}

  executeAction(blog: Blog) {
    console.log(blog.id);
  }
}
