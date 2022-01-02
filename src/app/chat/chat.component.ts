import { UserService } from './../services/user.service';
import { ChatBotService } from './../services/chat-bot.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  user!: string;
  guest!: string;
  message = '';
  messages!: any[];
  @ViewChild('scrollBox') private scrollBox!: ElementRef;

  constructor(private route: ActivatedRoute, private router: Router, private charBotService: ChatBotService, private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.messages = [];
      this.user = this.userService.getUser();
      this.guest = params['username'];
    });
  }

  ngAfterViewChecked(): void {
      this.scrollToBottom();
  }

  close() {
    this.router.navigate([{outlets: {chat: null}}]);
  }

  onKeyUp(event: any) {
    if (event.keyCode == 13) {
      this.send();
    }
  }

  send() {
    this.addMessage(this.user, this.message, 'left');
    this.reply();
    this.message = '';
  }
  
  private addMessage(author: string, message: string, type: string) {
    this.messages.push({
      author: author,
      message: message,
      type: type
    });
    this.scrollToBottom();
  }

  reply() {
    setTimeout(() => {
      this.addMessage(this.guest, this.charBotService.respond(), 'right');
    }, 2500);
  }

  scrollToBottom() {
    try {
      this.scrollBox.nativeElement.scrollTop = this.scrollBox.nativeElement.scrollHeight;
    } catch (error) {
      console.log(error);
    }
  }

}
