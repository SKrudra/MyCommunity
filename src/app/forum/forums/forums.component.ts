import { ForumsService } from './../../forums/services/forums.service';
import { Forum } from './../services/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent implements OnInit {

  forums!: Forum[];

  constructor(private forumsService: ForumsService) { }

  ngOnInit(): void {
    this.forums = this.forumsService.forums;
  }

}
