import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommandBarComponent } from '../../shared/components/command-bar/command-bar.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent,

  ],
  imports: [
    CommonModule,BlogRoutingModule,
  ]
})
export class BlogModule { }
