import { BlogsService } from './services/blogs.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ],
  providers: [BlogsService]
})
export class BlogsModule { }
