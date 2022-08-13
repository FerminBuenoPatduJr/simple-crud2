import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog[]=[
    {
      id: 1,
      title: "Blog_Title_1",
      description: "Blog_Description",
      author: "Blog_Author",
      comments: ["BlogComments1","BlogComments2"]
  },
  {
      id: 2,
      title: "Blog_2",
      description: "Fantasy",
      author: "JK Rowling",
      comments: ["Magical","Spectacular"]
  },
  {
      id: 3,
      title: "Blog_3",
      description: "Horror",
      author: "Sadako",
      comments: ["thriller","scary","suspense"]
  }
  ]

  getBlogs(){
    return this.blogs
  }
  constructor() { }
}
