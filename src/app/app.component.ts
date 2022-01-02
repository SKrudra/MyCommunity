import { UserService } from './services/user.service';
import { ChatBotService } from './services/chat-bot.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ChatBotService,
    UserService
  ]
})
export class AppComponent {
  title = 'MyCommunity';
  loggedIn: boolean = false;
  
  constructor(public userService: UserService) {}

  logout() {
    this.userService.logout();
  }
}
