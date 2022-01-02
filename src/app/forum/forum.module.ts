import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum/forum.component';
import { ForumsComponent } from './forums/forums.component';
import { ThreadComponent } from './thread/thread.component';
import { ThreadsComponent } from './threads/threads.component';



@NgModule({
  declarations: [
    ForumComponent,
    ForumsComponent,
    ThreadComponent,
    ThreadsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ForumModule { }
