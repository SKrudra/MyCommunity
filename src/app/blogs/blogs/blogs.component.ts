import { Post } from './../services/data';
import { BlogsService } from './../services/blogs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  posts!: Post[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.posts = this.blogsService.posts;
  }

}
