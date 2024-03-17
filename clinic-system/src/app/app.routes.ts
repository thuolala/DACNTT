import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './dangnhap/dangnhap.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogupComponent } from './dangky/dangky.component';
import { HomeComponent } from './trangchu/trangchu.component';
import { UserComponent } from './benhnhan/benhnhan.component';
import { ShiftListComponent } from './ds-lichkham/ds-lichkham.component';
import { DoctorComponent } from './bacsi/bacsi.component';
import { AdminComponent } from './admin/admin.component';
import { BnLichkhamComponent } from './bn-lichkham/bn-lichkham.component';

export const routes: Routes = [
  { path: '', redirectTo: '/trang-chu', pathMatch: 'full' },
  { path: 'trang-chu', component: HomeComponent, 
  children: [
    { path: 'dang-nhap', component: LoginComponent },
    { path: 'dang-ky', component: LogupComponent }
  ]},
  { path: 'nguoi-dung', component: UserComponent,
  children: [
    { path: 'ds-lich-kham', component: ShiftListComponent },
    { path: 'lich-kham/:dataSend', component: BnLichkhamComponent }
  ]
 },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bac-si', component: DoctorComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
