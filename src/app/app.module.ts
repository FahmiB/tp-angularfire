import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const config = {
  apiKey: "AIzaSyAoLMXOiOFaXinITgSNRPg4eryV1rzxK7g",
  authDomain: "tp-angularfire-4b679.firebaseapp.com",
  databaseURL: "https://tp-angularfire-4b679.firebaseio.com",
  projectId: "tp-angularfire-4b679",
  storageBucket: "tp-angularfire-4b679.appspot.com",
  messagingSenderId: "335869683956"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
