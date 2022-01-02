import { BlogsService } from './../services/blogs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  post!: any; // Post;
  post_id!: number;
  lines!: string[];
  canNext = true;
  canPrev = true;

  constructor(private route: ActivatedRoute, private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.post_id = Number.parseInt(params['post_id']);
      this.post = this.blogsService.post(this.post_id);
      this.lines = this.post.content.split('\n').filter(line => line.length);
      this.canPrev = (this.post_id > 1);
      this.canNext = (this.post_id < (this.blogsService.posts.length));
    });
  }

}
