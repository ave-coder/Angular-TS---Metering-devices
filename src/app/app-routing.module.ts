import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGuard } from './components/list.guard';
import { LoginGuard } from './components/login.guard';

import { LoginComponent } from './components/login.component';
import { ListComponent } from './components/list.component';
import { NotFoundComponent } from './components/notFound.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'list', component: ListComponent, canActivate: [ListGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
