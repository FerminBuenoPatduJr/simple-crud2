import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.interface';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
