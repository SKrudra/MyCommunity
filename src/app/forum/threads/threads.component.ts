import { ForumsService } from './../../forums/services/forums.service';
import { ActivatedRoute } from '@angular/router';
import { Thread } from './../services/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {

  threads!: Thread[];

  constructor(private route: ActivatedRoute, private forumsService: ForumsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.threads = this.forumsService.forum(params['forum_alias']).threads;
    });
  }

}
