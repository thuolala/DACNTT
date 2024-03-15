import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogupComponent } from './logup/logup.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ShiftListComponent } from './shift-list/shift-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/trang-chu', pathMatch: 'full' },
  { path: 'trang-chu', component: HomeComponent, 
  children: [
    { path: 'dang-nhap', component: LoginComponent },
    { path: 'dang-ky', component: LogupComponent }
  ]},
  { path: 'nguoi-dung', component: UserComponent,
  children: [
    { path: 'ca-kham', component: ShiftListComponent }
  ]
 },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
