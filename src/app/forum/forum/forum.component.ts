import { ForumsService } from './../../forums/services/forums.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Forum } from './../services/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  forum!: Forum;

  constructor(private route: ActivatedRoute, private router: Router, private forumsService: ForumsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.forum = this.forumsService.forum(params['forum_alias']);
      if (!this.forum) {
        this.router.navigate(['/not-found']);
      }
    });
  }

}
