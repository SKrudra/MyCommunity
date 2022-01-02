import { ForumsService } from './../../forums/services/forums.service';
import { ActivatedRoute } from '@angular/router';
import { Forum, Thread } from './../services/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  forum!: Forum;
  thread!: Thread; 

  constructor(private route: ActivatedRoute, private forumsService: ForumsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let forum = this.route.snapshot.parent?.params['forum_alias'];
      this.thread = this.forumsService.thread(forum, params['thread_alias']);
    });
  }

}
