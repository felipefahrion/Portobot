import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { GetStartedComponent } from './get-started/get-started.component';
=======
import { ChatViewComponent } from './chat-view/chat-view.component';
>>>>>>> origin/chatView

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    GetStartedComponent
=======
    ChatViewComponent
>>>>>>> origin/chatView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
