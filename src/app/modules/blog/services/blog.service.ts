import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.interface';


@Injectable({
  providedIn: 'root',
})
export class BlogService {

  constructor() { }

  private blogs: Blog[] = [
    {
      id: 1,
      title: 'Beyond the Beyond',
      description: 'The kickstarter smart citizen kit',
      author: 'Bruce Sterling',
      comments: ['Amazing', 'Educational'],
    },
    {
      id: 2,
      title: 'The Lipstick Chronicles',
      description:
        'Copies of Blackbird Sisters mysteries can be found at all bookstores and in e-book form from all book vendors.',
      author: 'Nancy Martin',
      comments: ['Apparel', 'Beauty'],
    },
    {
      id: 3,
      title: 'No rules. Just write',
      description:
        'The nature lover in me is constantly at war with my frustrated-gardener self.',
      author: 'Brenda Coulter',
      comments: ['Adventure', 'Nature', 'Outdoor'],
    },
  ];

  getBlogs() {
    return this.blogs;
  }

}
