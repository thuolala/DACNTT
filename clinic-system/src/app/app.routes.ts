import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogupComponent } from './logup/logup.component';

export const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logup', component: LogupComponent },
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
