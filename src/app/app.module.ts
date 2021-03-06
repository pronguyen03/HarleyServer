import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from './header/header.component';
import { environment } from 'src/environments/environment';
//Firebase
import {AngularFireAuthModule} from '@angular/fire/auth';
// import {AngularFireDatabaseModule} from '@angular/fire/auth';

// AngularFireFunctionsModule
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PersonalModule } from './personal/personal.module';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, HeaderComponent, DashboardComponent, MenuComponent, ChatbotComponent, SignupComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule
  ,AngularFireModule.initializeApp(environment.firebase)
  ,AngularFireAuthModule
  , AngularFirestoreModule
  , AngularFireStorageModule
  , AngularFireMessagingModule
  ,PersonalModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
