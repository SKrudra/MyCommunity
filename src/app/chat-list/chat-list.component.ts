import { ForumsService } from './../forum/services/forums.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  users!: any[];
  talkTo!: string;

  constructor(private router: Router, private forumsService: ForumsService) { }

  ngOnInit(): void {
    this.users = this.forumsService.users;
  }

  close() {
    this.router.navigate([{outlets: {chat: null}}]);
  }

}
