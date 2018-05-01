// routerConfig.ts

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; //set
import { EditComponent } from './components/edit/edit.component';
import { DiaryComponent } from './components/diary/diary.component';

//set
export const appRoutes: Routes = [
  { path: 'login',
    component: LoginComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  { path: 'diary',
    component: DiaryComponent
  }
];
