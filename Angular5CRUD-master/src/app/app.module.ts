import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditComponent } from './components/edit/edit.component';
import { appRoutes } from './routerConfig';

import { DiaryService } from './diary.service';
import { LoginComponent } from './components/login/login.component';
import { DiaryComponent } from './components/diary/diary.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    LoginComponent,
    DiaryComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [DiaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
