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
import { BsLichkhamComponent } from './bs-lichkham/bs-lichkham.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { TongquanComponent } from './admin/tongquan/tongquan.component';
import { QlbsComponent } from './admin/qlbs/qlbs.component';
import { QlbnComponent } from './admin/qlbn/qlbn.component';
import { QllkComponent } from './admin/qllk/qllk.component';
import { QlLskbComponent } from './admin/ql-lskb/ql-lskb.component';

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
  { path: 'bac-si', component: DoctorComponent, 
  children: [
    {path: 'lich-kham/:dataSend', component: BsLichkhamComponent}
  ] },
  { path: 'admin', component: AdminComponent, 
  children: [
    {path: 'tong-quan', component: TongquanComponent}, 
    {path: 'ql-bacsi', component: QlbsComponent},
    {path: 'ql-benhnhan', component: QlbnComponent},
    {path: 'ql-lichkham', component: QllkComponent},
    {path: 'ql-lichsu', component: QlLskbComponent}
  ] 
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
