import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BookFormComponent } from './pages/book-form/book-form.component';

@NgModule({
  declarations: [BookListComponent, BookItemComponent],
  imports: [CommonModule, BookRoutingModule, FormsModule, ReactiveFormsModule],

  // exports: [FormBuilder],
  providers: [FormBuilder],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BookModule { }
