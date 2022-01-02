import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { LoginComponent } from './login/login.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatListComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClarityModule,
    ClrIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
