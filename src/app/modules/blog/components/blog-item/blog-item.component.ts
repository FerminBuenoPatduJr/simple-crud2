import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.interface';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  blogList: Blog[] = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  getBlogs() {
    this.blogList = this.blogService.getBlogs();
  }

}
