import { SharedModule } from './../../shared/components/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommandBarComponent } from '../../shared/components/command-bar/command-bar.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatFormField,
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [BlogListComponent, BlogItemComponent, BlogFormComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    ReactiveFormsModule,
    FormsModule,
    // MatCardModule,
    // MatToolbarModule,
    // MatFormFieldModule,
    // MatInputModule,
    SharedModule
  ],
  exports: [BlogListComponent],
  providers: [FormBuilder],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogModule {}
